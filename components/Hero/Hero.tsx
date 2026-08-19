'use client'
import React from 'react'
import { motion } from 'framer-motion'
import InteractiveTerminal from '../InteractiveTerminal'

export default function Hero(){
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <motion.div className="space-y-6"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-block px-3 py-1 rounded-full text-xs font-medium badge-shimmer">⚡ BASE44 PARTNER & AI APP ARCHITECT</div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Engineering High-Impact Web Apps & <span className="text-accentCyan">Intelligent Systems</span>.
        </h1>

        <p className="text-slate-300 max-w-xl">Turning complex workflows into fast, scalable, production-ready applications with modern full-stack architectures.</p>

        <div className="flex gap-4 items-center">
          <motion.a href="https://app.base44.com/@john-davis-2" target="_blank" rel="noreferrer"
            className="rounded-full px-5 py-3 bg-gradient-to-r from-accentCyan to-accentIndigo text-black font-semibold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Launch Project on Base44
          </motion.a>

          <a href="#projects" className="text-sm text-slate-300 hover:text-white transition">Explore Apps & Systems →</a>
        </div>
      </motion.div>

      <motion.div className="glass rounded-xl p-4 shadow-lg" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <InteractiveTerminal />
      </motion.div>
    </div>
  )
}
