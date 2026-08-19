'use client'
import React, { useState } from 'react'
import { Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NavBar(){
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto glass rounded-full max-w-5xl w-full mx-4 px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gradient-to-br from-accentCyan to-accentIndigo p-1">
              <div className="bg-black/80 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">JD</div>
            </div>
            <div className="flex flex-col text-sm leading-tight">
              <span className="font-semibold">John Davis</span>
              <span className="text-[11px] text-slate-300 flex items-center gap-2">🟢 <span className="opacity-90">Base44 Certified</span></span>
            </div>
          </div>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
          <li><a href="#capabilities" className="hover:text-white transition">Capabilities</a></li>
          <li><a href="#tech" className="hover:text-white transition">Tech Stack</a></li>
          <li><a href="#process" className="hover:text-white transition">Process</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>

        <div className="flex items-center gap-3">
          <motion.a
            href="https://app.base44.com/@john-davis-2"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-4 py-2 text-sm font-semibold bg-gradient-to-r from-accentCyan to-accentIndigo text-black"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Work With Me
          </motion.a>

          {/* Mobile menu button */}
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden ml-2 p-2 rounded-full bg-black/20 text-slate-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed left-4 right-4 top-20 z-50 pointer-events-auto glass rounded-xl p-4 md:hidden max-w-3xl mx-auto">
          <ul className="flex flex-col gap-3 text-sm text-slate-200">
            <li><a href="#projects" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-black/40">Projects</a></li>
            <li><a href="#capabilities" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-black/40">Capabilities</a></li>
            <li><a href="#tech" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-black/40">Tech Stack</a></li>
            <li><a href="#process" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-black/40">Process</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-black/40">Contact</a></li>
            <li><a href="https://app.base44.com/@john-davis-2" target="_blank" rel="noreferrer" className="mt-2 inline-block px-4 py-2 rounded bg-gradient-to-r from-accentCyan to-accentIndigo text-black font-semibold">Work With Me</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}
