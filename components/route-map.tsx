"use client"

import { useEffect, useRef } from "react"

export default function RouteMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    // Draw world map (simplified)
    const drawMap = () => {
      ctx.fillStyle = "#e6f2ff"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw continents (simplified shapes)
      ctx.fillStyle = "#d4e6f6"

      // North America
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.1, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.25, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.3, canvas.height * 0.4)
      ctx.lineTo(canvas.width * 0.2, canvas.height * 0.6)
      ctx.lineTo(canvas.width * 0.1, canvas.height * 0.4)
      ctx.fill()

      // South America
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.2, canvas.height * 0.6)
      ctx.lineTo(canvas.width * 0.25, canvas.height * 0.8)
      ctx.lineTo(canvas.width * 0.2, canvas.height * 0.9)
      ctx.lineTo(canvas.width * 0.15, canvas.height * 0.7)
      ctx.fill()

      // Europe
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.4, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.5, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.5, canvas.height * 0.4)
      ctx.lineTo(canvas.width * 0.4, canvas.height * 0.4)
      ctx.fill()

      // Africa
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.4, canvas.height * 0.4)
      ctx.lineTo(canvas.width * 0.5, canvas.height * 0.4)
      ctx.lineTo(canvas.width * 0.5, canvas.height * 0.7)
      ctx.lineTo(canvas.width * 0.4, canvas.height * 0.7)
      ctx.fill()

      // Asia
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.5, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.7, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.7, canvas.height * 0.5)
      ctx.lineTo(canvas.width * 0.5, canvas.height * 0.5)
      ctx.fill()

      // Australia
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.7, canvas.height * 0.6)
      ctx.lineTo(canvas.width * 0.8, canvas.height * 0.6)
      ctx.lineTo(canvas.width * 0.8, canvas.height * 0.7)
      ctx.lineTo(canvas.width * 0.7, canvas.height * 0.7)
      ctx.fill()
    }

    // Draw flight routes
    const drawRoutes = () => {
      // Standard route (straight line)
      ctx.beginPath()
      ctx.strokeStyle = "rgba(255, 0, 0, 0.5)"
      ctx.lineWidth = 2
      ctx.moveTo(canvas.width * 0.2, canvas.height * 0.3) // New York
      ctx.lineTo(canvas.width * 0.45, canvas.height * 0.3) // London
      ctx.stroke()

      // Eco route (curved to follow jet streams)
      ctx.beginPath()
      ctx.strokeStyle = "rgba(0, 128, 0, 0.7)"
      ctx.lineWidth = 3
      ctx.moveTo(canvas.width * 0.2, canvas.height * 0.3) // New York
      ctx.bezierCurveTo(
        canvas.width * 0.3,
        canvas.height * 0.25,
        canvas.width * 0.35,
        canvas.height * 0.25,
        canvas.width * 0.45,
        canvas.height * 0.3, // London
      )
      ctx.stroke()

      // Add route markers
      const drawAirport = (x: number, y: number, name: string) => {
        ctx.fillStyle = "#1a73e8"
        ctx.beginPath()
        ctx.arc(x, y, 5, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "#000"
        ctx.font = "12px Arial"
        ctx.fillText(name, x + 10, y + 5)
      }

      drawAirport(canvas.width * 0.2, canvas.height * 0.3, "JFK")
      drawAirport(canvas.width * 0.45, canvas.height * 0.3, "LHR")

      // Add legend
      ctx.fillStyle = "#fff"
      ctx.fillRect(canvas.width - 150, 10, 140, 70)
      ctx.strokeStyle = "#ccc"
      ctx.strokeRect(canvas.width - 150, 10, 140, 70)

      ctx.fillStyle = "#000"
      ctx.font = "12px Arial"
      ctx.fillText("Legend:", canvas.width - 140, 30)

      ctx.strokeStyle = "rgba(255, 0, 0, 0.5)"
      ctx.beginPath()
      ctx.moveTo(canvas.width - 140, 45)
      ctx.lineTo(canvas.width - 110, 45)
      ctx.stroke()
      ctx.fillText("Standard Route", canvas.width - 105, 48)

      ctx.strokeStyle = "rgba(0, 128, 0, 0.7)"
      ctx.beginPath()
      ctx.moveTo(canvas.width - 140, 65)
      ctx.lineTo(canvas.width - 110, 65)
      ctx.stroke()
      ctx.fillText("Eco Route", canvas.width - 105, 68)
    }

    // Draw everything
    drawMap()
    drawRoutes()

    // Handle window resize
    const handleResize = () => {
      if (!canvas) return
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
      drawMap()
      drawRoutes()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" style={{ minHeight: "300px" }} />
}

