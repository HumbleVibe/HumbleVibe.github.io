'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  open: boolean
  onClose: ()=>void
  title: string
  body?: string
}

export default function ProjectModal({ open, onClose, title, body }: Props){
  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60" onClick={onClose} />

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glass rounded-2xl p-6 z-60 max-w-3xl w-full">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button aria-label="close" onClick={onClose} className="text-slate-400">✕</button>
        </div>

        <div className="mt-4 text-slate-300">{body ?? 'Project details and interactive mockups will appear here.'}</div>

        <div className="mt-6 flex gap-3">
          <a href="#" className="px-4 py-2 rounded bg-accentCyan text-black font-semibold">Live Case Study</a>
          <a href="#" className="px-4 py-2 rounded border border-slate-700 text-slate-200">Read More</a>
        </div>
      </motion.div>
    </div>
  )
}
