'use client'
import React, { useRef, useEffect } from 'react'

export default function Background(){
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(()=>{
    const canvas = ref.current
    if(!canvas) return
    const ctx = canvas.getContext('2d')!
    let animationFrame = 0
    let width = 0, height = 0, dpr = Math.max(1, window.devicePixelRatio || 1)

    const particles: { x:number,y:number,vx:number,vy:number }[] = []
    const PARTICLE_COUNT = 60

    function resize(){
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr,0,0,dpr,0,0)
    }

    function initParticles(){
      particles.length = 0
      for(let i=0;i<PARTICLE_COUNT;i++){
        particles.push({ x: Math.random()*width, y: Math.random()*height, vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3 })
      }
    }

    function draw(){
      ctx.clearRect(0,0,width,height)

      // soft ambient gradient
      const g = ctx.createLinearGradient(0,0,width,height)
      g.addColorStop(0, 'rgba(6,182,212,0.03)')
      g.addColorStop(1, 'rgba(99,102,241,0.02)')
      ctx.fillStyle = g
      ctx.fillRect(0,0,width,height)

      // draw connections
      for(let i=0;i<particles.length;i++){
        const p = particles[i]
        for(let j=i+1;j<particles.length;j++){
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx*dx+dy*dy)
          if(dist < 110){
            const alpha = 0.12 * (1 - dist/110)
            ctx.strokeStyle = `rgba(99,102,241,${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }

      // draw particles
      for(const p of particles){
        p.x += p.vx
        p.y += p.vy
        if(p.x < -10) p.x = width + 10
        if(p.x > width + 10) p.x = -10
        if(p.y < -10) p.y = height + 10
        if(p.y > height + 10) p.y = -10

        ctx.beginPath()
        ctx.fillStyle = 'rgba(6,182,212,0.7)'
        ctx.arc(p.x, p.y, 2, 0, Math.PI*2)
        ctx.fill()
      }

      animationFrame = requestAnimationFrame(draw)
    }

    function start(){
      resize()
      initParticles()
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(draw)
    }

    start()
    window.addEventListener('resize', start)
    return ()=>{ window.removeEventListener('resize', start); cancelAnimationFrame(animationFrame) }
  }, [])

  return (
    <canvas ref={ref} className="pointer-events-none fixed inset-0 w-full h-full z-0" aria-hidden="true" />
  )
}
