'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { tilt } from '../../lib/motion'

type Props = {
  title: string
  tags: string[]
  metric?: string
  onOpen: () => void
}

export default function ProjectCard({ title, tags, metric, onOpen }: Props){
  return (
    <motion.div className="glass rounded-xl p-4 cursor-pointer" {...tilt(8)} onClick={onOpen} whileHover={{ scale: 1.02 }}>
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{title}</h4>
        <div className="text-xs text-slate-400">Featured</div>
      </div>
      <div className="mt-3 flex gap-2 flex-wrap">
        {tags.map(t => (<span key={t} className="text-[11px] px-2 py-1 rounded bg-[#071025] text-slate-300">{t}</span>))}
      </div>
      {metric && <div className="mt-3 text-sm text-accentCyan">{metric}</div>}
    </motion.div>
  )
}
