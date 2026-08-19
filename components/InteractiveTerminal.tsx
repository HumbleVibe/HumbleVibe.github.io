'use client'
import React, { useEffect, useState } from 'react'

const initialLogs = [
  'Initializing Base44 runtime...',
  'Loading services: auth, db, cache',
  'Connecting to edge functions — SUCCESS',
  'Running migrations: ✅ 12 migrations applied',
  'Building client bundle — optimized 72 modules',
  'Deploying to staging — live at https://staging.example.app',
]

export default function InteractiveTerminal(){
  const [logs, setLogs] = useState<string[]>([])
  const [latency, setLatency] = useState<number>(32)

  useEffect(()=>{
    let i = 0
    const t = setInterval(()=>{
      if(i < initialLogs.length){
        setLogs(prev => [...prev, initialLogs[i]])
        i++
      } else {
        // rotate a subtle status line
        setLogs(prev => prev.slice(-6))
      }
      setLatency(Math.max(12, Math.round(30 + Math.sin(Date.now()/1200)*8)))
    },900)

    return ()=> clearInterval(t)
  },[])

  return (
    <div className="font-mono text-sm text-slate-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-400"></span>
        </div>
        <div className="text-xs text-slate-400">runtime &middot; <span className="text-accentCyan">{latency}ms</span></div>
      </div>

      <div className="bg-[#02040a] rounded-md p-3 min-h-[160px] overflow-auto">
        {logs.map((l, idx)=> (
          <div key={idx} className="leading-relaxed">{l}</div>
        ))}
      </div>

      <div className="mt-3 flex gap-2 items-center">
        <input aria-label="terminal input" className="flex-1 bg-transparent border border-slate-800 rounded px-3 py-2 text-sm text-slate-300" placeholder="> deploy --env production" />
        <button className="px-3 py-2 rounded bg-accentCyan text-black font-semibold">Run</button>
      </div>
    </div>
  )
}
