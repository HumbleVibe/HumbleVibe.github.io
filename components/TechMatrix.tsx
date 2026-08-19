'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { tilt } from '../lib/motion'

type Card = {
  id: string
  title: string
  description: string
  large?: boolean
}

const cards: Card[] = [
  { id: 'c1', title: 'Rapid App Prototyping & MVP Deployment', description: 'Pipeline visual with CI→deploy flow, iterative feature toggles.', large: true },
  { id: 'c2', title: 'Base44 Ecosystem & Workflows', description: 'Integrated APIs, database models, and custom logic orchestration.' },
  { id: 'c3', title: 'AI-Powered Automation & Analytics', description: 'Interactive data stream visual, model orchestration, observability.' },
  { id: 'c4', title: 'Production-Grade UI/UX Engineering', description: 'Pixel-perfect responsive interfaces and accessibility-first design.' }
]

export default function TechMatrix(){
  return (
    <section id="capabilities" className="mt-14">
      <h2 className="text-2xl font-bold mb-6">Capabilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map(c => (
          <motion.div
            key={c.id}
            className={`glass rounded-xl p-5 ${c.large ? 'md:col-span-2' : ''}`}
            {...tilt(10)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <div className="text-xs text-slate-400">Capability</div>
            </div>
            <p className="mt-3 text-slate-300">{c.description}</p>

            {/* subtle accent */}
            <div className="mt-4 h-1 rounded bg-gradient-to-r from-accentCyan to-accentIndigo blur-sm opacity-80" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
