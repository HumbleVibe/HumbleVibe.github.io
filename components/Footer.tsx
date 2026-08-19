'use client'
import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12">
      <div className="glass rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-300">
        <div className="text-sm">© {new Date().getFullYear()} John Davis</div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400"/> <span>System: OK</span></div>
          <div className="font-mono text-xs">/tech/base44 /contact</div>
        </div>
      </div>
    </footer>
  )
}
