'use client'
import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { title: 'Architectural Blueprint & Scope', text: 'Define product goals, data model, and infra.' },
  { title: 'High-Velocity Sprint Build', text: 'Deliver MVP features swiftly with iterative reviews.' },
  { title: 'Optimization, Security & UI Polish', text: 'Performance, security hardening, and UX polish.' },
  { title: 'Production Deployment & Handoff', text: 'Handoff docs, monitoring, and runbooks.' }
]

export default function Timeline(){
  return (
    <section className="mt-12" id="process">
      <h2 className="text-2xl font-bold mb-6">Deployment Pipeline</h2>
      <div className="relative">
        <svg className="absolute left-6 top-3 h-full" width="48" viewBox="0 0 48 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M24 0 V600" stroke="#334155" strokeWidth={2} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} strokeLinecap="round" />
        </svg>

        <div className="ml-16 flex flex-col gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.title} className="glass rounded-xl p-4"
              initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-accentCyan" />
                <div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-slate-300 text-sm">{s.text}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
