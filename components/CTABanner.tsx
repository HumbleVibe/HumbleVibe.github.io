'use client'
import React from 'react'

export default function CTABanner(){
  return (
    <section className="mt-12">
      <div className="glass rounded-2xl p-6 border border-transparent hover:border-accentCyan/50 transition-all">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Have an app idea or custom workflow to build?</h3>
            <p className="text-slate-300">Let's architect it, ship fast, and hand over production-ready systems optimized for scale.</p>
          </div>
          <a href="https://app.base44.com/@john-davis-2" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full bg-gradient-to-r from-accentCyan to-accentIndigo text-black font-semibold cta-pulse">Talk with John on Base44</a>
        </div>
      </div>
    </section>
  )
}
