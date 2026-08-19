'use client'
import React from 'react'
import { Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NavBar(){
  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto glass rounded-full max-w-5xl w-full mx-4 px-6 py-3 flex items-center justify-between gap-4">
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
        </div>
      </nav>
    </header>
  )
}
