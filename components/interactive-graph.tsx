"use client"

import { useRef, useEffect, useCallback } from "react"

/* ─── Types ─── */
interface Node {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  radius: number
  color1: string
  color2: string
  iconIndex: number
  /** 0‒1: how "activated" the hover state is */
  hoverAmount: number
  /** satellite sub-nodes that orbit when hovered */
  satellites: Satellite[]
}

interface Satellite {
  angle: number
  dist: number
  radius: number
  color1: string
  color2: string
}

interface Edge {
  from: number
  to: number
}

/* ─── Palette ─── */
const COLORS = [
  { c1: "#8CFF33", c2: "#5BCF1A" },
  { c1: "#003049", c2: "#00507A" },
  { c1: "#FF8C42", c2: "#FF5500" },
  { c1: "#8CFF33", c2: "#003049" },
  { c1: "#003049", c2: "#8CFF33" },
  { c1: "#FF8C42", c2: "#8CFF33" },
  { c1: "#5BCF1A", c2: "#003049" },
  { c1: "#003049", c2: "#FF8C42" },
  { c1: "#8CFF33", c2: "#FF8C42" },
  { c1: "#00507A", c2: "#5BCF1A" },
  { c1: "#FF5500", c2: "#003049" },
  { c1: "#5BCF1A", c2: "#FF8C42" },
]

/* ─── Icon images (loaded once) ─── */
const ICON_SRCS = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-3NZcodpuM8vzIhhzypNSbulhMflF3N.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-3-nV5XtGHIs1h0x2A9WXtqzGeqhqi3X6.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-2-ffgbGgAESt1fWcdD5LC7JFDb3nLkt3.png",
]

function loadIcons(): HTMLImageElement[] {
  return ICON_SRCS.map((src) => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = src
    return img
  })
}

/* ─── Satellite generator ─── */
function makeSatellites(): Satellite[] {
  const count = 3 + Math.floor(Math.random() * 3) // 3-5
  const sats: Satellite[] = []
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.4
    const palette = COLORS[Math.floor(Math.random() * COLORS.length)]
    sats.push({
      angle,
      dist: 1.8 + Math.random() * 0.6, // multiplier of parent radius
      radius: 3 + Math.random() * 4,
      color1: palette.c1,
      color2: palette.c2,
    })
  }
  return sats
}

/* ─── Graph generators ─── */
function generateNodes(width: number, height: number): Node[] {
  const nodes: Node[] = []
  const count = 12
  const padding = 40

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2
    const rx = (width - padding * 2) * 0.38
    const ry = (height - padding * 2) * 0.38
    const jitterX = (Math.random() - 0.5) * rx * 0.5
    const jitterY = (Math.random() - 0.5) * ry * 0.5
    const x = width / 2 + Math.cos(angle) * rx + jitterX
    const y = height / 2 + Math.sin(angle) * ry + jitterY
    const color = COLORS[i % COLORS.length]
    nodes.push({
      x,
      y,
      baseX: x,
      baseY: y,
      vx: 0,
      vy: 0,
      radius: 14 + Math.random() * 22,
      color1: color.c1,
      color2: color.c2,
      iconIndex: i % 3,
      hoverAmount: 0,
      satellites: makeSatellites(),
    })
  }
  return nodes
}

function generateEdges(nodes: Node[]): Edge[] {
  const edges: Edge[] = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].baseX - nodes[j].baseX
      const dy = nodes[i].baseY - nodes[j].baseY
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 220) {
        edges.push({ from: i, to: j })
      }
    }
  }
  return edges
}

/* ─── Component ─── */
export function InteractiveGraph({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const edgesRef = useRef<Edge[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animRef = useRef<number>(0)
  const dprRef = useRef(1)
  const iconsRef = useRef<HTMLImageElement[]>([])
  const timeRef = useRef(0)

  const initGraph = useCallback((width: number, height: number) => {
    nodesRef.current = generateNodes(width, height)
    edgesRef.current = generateEdges(nodesRef.current)
  }, [])

  useEffect(() => {
    iconsRef.current = loadIcons()

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    dprRef.current = dpr

    function resize() {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dprRef.current
      canvas.height = rect.height * dprRef.current
      initGraph(rect.width, rect.height)
    }

    resize()
    window.addEventListener("resize", resize)

    function onPointerMove(e: PointerEvent) {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    function onPointerLeave() {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    canvas.addEventListener("pointermove", onPointerMove)
    canvas.addEventListener("pointerleave", onPointerLeave)

    function draw() {
      if (!canvas || !ctx) return
      timeRef.current += 0.008
      const t = timeRef.current
      const dpr = dprRef.current
      const w = canvas.width / dpr
      const h = canvas.height / dpr
      const nodes = nodesRef.current
      const edges = edgesRef.current
      const mouse = mouseRef.current
      const icons = iconsRef.current

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)

      /* ── Physics ── */
      const repelRadius = 80
      const repelStrength = 0.8
      const springStrength = 0.008
      const damping = 0.96

      for (const node of nodes) {
        const dx = node.x - mouse.x
        const dy = node.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        // If cursor is directly over this node, skip repulsion entirely
        // so the user can comfortably hover. Only gently repel distant nodes.
        const isDirectlyOver = dist < node.radius + 20
        if (!isDirectlyOver && dist < repelRadius && dist > 0) {
          const force = ((repelRadius - dist) / repelRadius) * repelStrength
          node.vx += (dx / dist) * force
          node.vy += (dy / dist) * force
        }

        // Gentle idle drift
        node.vx += Math.sin(t + node.baseX * 0.01) * 0.008
        node.vy += Math.cos(t + node.baseY * 0.01) * 0.008

        node.vx += (node.baseX - node.x) * springStrength
        node.vy += (node.baseY - node.y) * springStrength

        node.vx *= damping
        node.vy *= damping

        node.x += node.vx
        node.y += node.vy

        /* ── Hover amount (smooth 0-1) ── */
        const isHovered = dist < node.radius + 30
        const targetHover = isHovered ? 1 : 0
        node.hoverAmount += (targetHover - node.hoverAmount) * 0.06
        if (node.hoverAmount < 0.005) node.hoverAmount = 0
      }

      /* ── Draw edges ── */
      for (const edge of edges) {
        const a = nodes[edge.from]
        const b = nodes[edge.to]
        const dx = a.x - b.x
        const dy = a.y - b.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = 260
        const opacity = Math.max(0, 1 - dist / maxDist) * 0.2

        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = `rgba(0, 48, 73, ${opacity})`
        ctx.lineWidth = 1.2
        ctx.stroke()
      }

      /* ── Draw nodes ── */
      for (const node of nodes) {
        const hover = node.hoverAmount
        const hoverScale = 1 + hover * 0.35
        const r = node.radius * hoverScale

        /* -- Satellites (appear on hover) -- */
        if (hover > 0.01) {
          const satAlpha = hover
          for (const sat of node.satellites) {
            const orbitAngle = sat.angle + t * 0.5
            const orbitDist = r * sat.dist
            const sx = node.x + Math.cos(orbitAngle) * orbitDist
            const sy = node.y + Math.sin(orbitAngle) * orbitDist

            // Tiny connecting line
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(sx, sy)
            ctx.strokeStyle = `rgba(0, 48, 73, ${satAlpha * 0.15})`
            ctx.lineWidth = 1
            ctx.stroke()

            // Satellite circle
            const sg = ctx.createRadialGradient(
              sx - sat.radius * 0.2,
              sy - sat.radius * 0.2,
              sat.radius * 0.1,
              sx,
              sy,
              sat.radius
            )
            sg.addColorStop(0, hexToRgba(sat.color1, satAlpha))
            sg.addColorStop(1, hexToRgba(sat.color2, satAlpha))
            ctx.beginPath()
            ctx.arc(sx, sy, sat.radius * hover, 0, Math.PI * 2)
            ctx.fillStyle = sg
            ctx.fill()
          }
        }

        /* -- Outer glow -- */
        const glowAlpha = 0.1 + hover * 0.12
        const glow = ctx.createRadialGradient(
          node.x,
          node.y,
          r * 0.5,
          node.x,
          node.y,
          r * 2.2
        )
        glow.addColorStop(0, hexToRgba(node.color1, glowAlpha))
        glow.addColorStop(1, hexToRgba(node.color1, 0))
        ctx.beginPath()
        ctx.arc(node.x, node.y, r * 2.2, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        /* -- Main circle -- */
        const grad = ctx.createRadialGradient(
          node.x - r * 0.3,
          node.y - r * 0.3,
          r * 0.1,
          node.x,
          node.y,
          r
        )
        grad.addColorStop(0, node.color1)
        grad.addColorStop(1, node.color2)
        ctx.beginPath()
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        /* -- Specular highlight -- */
        const hl = ctx.createRadialGradient(
          node.x - r * 0.25,
          node.y - r * 0.3,
          r * 0.05,
          node.x - r * 0.15,
          node.y - r * 0.2,
          r * 0.55
        )
        hl.addColorStop(0, `rgba(255,255,255,${0.4 - hover * 0.2})`)
        hl.addColorStop(1, "rgba(255,255,255,0)")
        ctx.beginPath()
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2)
        ctx.fillStyle = hl
        ctx.fill()

        /* -- Icon fading in on hover -- */
        if (hover > 0.01) {
          const icon = icons[node.iconIndex]
          if (icon && icon.complete && icon.naturalWidth > 0) {
            const iconSize = r * 1.0
            ctx.save()
            ctx.globalAlpha = hover * 0.9
            ctx.beginPath()
            ctx.arc(node.x, node.y, r * 0.85, 0, Math.PI * 2)
            ctx.clip()
            ctx.drawImage(
              icon,
              node.x - iconSize / 2,
              node.y - iconSize / 2,
              iconSize,
              iconSize
            )
            ctx.restore()
          }
        }
      }

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("pointermove", onPointerMove)
      canvas.removeEventListener("pointerleave", onPointerLeave)
    }
  }, [initGraph])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full touch-none ${className}`}
      style={{ display: "block" }}
      aria-hidden="true"
    />
  )
}

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}
