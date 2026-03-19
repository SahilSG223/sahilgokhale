import { useEffect, useRef } from 'react'
import { useMousePosition } from '../hooks/useMousePosition'

function createParticle(width, height) {
  return {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
    translateX: 0,
    translateY: 0,
    size: Math.floor(Math.random() * 2) + 0.1,
    alpha: 0,
    targetAlpha: Number((Math.random() * 0.6 + 0.1).toFixed(1)),
    dx: (Math.random() - 0.5) * 0.2,
    dy: (Math.random() - 0.5) * 0.2,
    magnetism: 0.1 + Math.random() * 4,
  }
}

function remapValue(value, start1, end1, start2, end2) {
  const remapped =
    ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
  return remapped > 0 ? remapped : 0
}

export default function Particles({
  className = '',
  quantity = 30,
  staticity = 50,
  ease = 50,
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const contextRef = useRef(null)
  const circlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const canvasSizeRef = useRef({ w: 0, h: 0 })
  const animationFrameRef = useRef(0)
  const mousePosition = useMousePosition()
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1

  useEffect(() => {
    if (!canvasRef.current) {
      return undefined
    }

    contextRef.current = canvasRef.current.getContext('2d')

    const resizeCanvas = () => {
      if (!containerRef.current || !canvasRef.current || !contextRef.current) {
        return
      }

      circlesRef.current = []
      canvasSizeRef.current = {
        w: containerRef.current.offsetWidth,
        h: containerRef.current.offsetHeight,
      }

      canvasRef.current.width = canvasSizeRef.current.w * dpr
      canvasRef.current.height = canvasSizeRef.current.h * dpr
      canvasRef.current.style.width = `${canvasSizeRef.current.w}px`
      canvasRef.current.style.height = `${canvasSizeRef.current.h}px`
      contextRef.current.setTransform(1, 0, 0, 1, 0, 0)
      contextRef.current.scale(dpr, dpr)

      for (let i = 0; i < quantity; i += 1) {
        circlesRef.current.push(
          createParticle(canvasSizeRef.current.w, canvasSizeRef.current.h),
        )
      }
    }

    const clearContext = () => {
      if (!contextRef.current) {
        return
      }
      contextRef.current.clearRect(
        0,
        0,
        canvasSizeRef.current.w,
        canvasSizeRef.current.h,
      )
    }

    const drawCircle = (circle) => {
      if (!contextRef.current) {
        return
      }

      contextRef.current.translate(circle.translateX, circle.translateY)
      contextRef.current.beginPath()
      contextRef.current.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI)
      contextRef.current.fillStyle = `rgba(255, 255, 255, ${circle.alpha})`
      contextRef.current.fill()
      contextRef.current.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const animate = () => {
      clearContext()

      circlesRef.current = circlesRef.current.map((circle) => {
        const edgeDistances = [
          circle.x + circle.translateX - circle.size,
          canvasSizeRef.current.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasSizeRef.current.h - circle.y - circle.translateY - circle.size,
        ]

        const closestEdge = edgeDistances.reduce((a, b) => Math.min(a, b))
        const edgeAlpha = Number(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2))

        if (edgeAlpha > 1) {
          circle.alpha += 0.02
          if (circle.alpha > circle.targetAlpha) {
            circle.alpha = circle.targetAlpha
          }
        } else {
          circle.alpha = circle.targetAlpha * edgeAlpha
        }

        circle.x += circle.dx
        circle.y += circle.dy
        circle.translateX +=
          (mouseRef.current.x / (staticity / circle.magnetism) - circle.translateX) /
          ease
        circle.translateY +=
          (mouseRef.current.y / (staticity / circle.magnetism) - circle.translateY) /
          ease

        const outside =
          circle.x < -circle.size ||
          circle.x > canvasSizeRef.current.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSizeRef.current.h + circle.size

        return outside
          ? createParticle(canvasSizeRef.current.w, canvasSizeRef.current.h)
          : circle
      })

      circlesRef.current.forEach(drawCircle)
      animationFrameRef.current = window.requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.cancelAnimationFrame(animationFrameRef.current)
    }
  }, [dpr, ease, quantity, staticity])

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }

    const rect = canvasRef.current.getBoundingClientRect()
    const { w, h } = canvasSizeRef.current
    const x = mousePosition.x - rect.left - w / 2
    const y = mousePosition.y - rect.top - h / 2
    const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2

    if (inside) {
      mouseRef.current = { x, y }
    }
  }, [mousePosition.x, mousePosition.y])

  return (
    <div className={className} ref={containerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
