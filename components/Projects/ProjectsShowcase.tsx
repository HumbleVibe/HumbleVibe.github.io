'use client'
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

type Project = {
  id: string
  title: string
  tags: string[]
  metric?: string
  body?: string
}

const sample: Project[] = [
  { id: 'p1', title: 'ServeLog — Volunteer & Board Tracking', tags: ['Base44','TypeScript','Automated Audits','Impact Analytics'], metric: 'Eliminates 90% of non-profit admin tracking overhead.', body: 'ServeLog streamlines volunteer hour tracking, approvals, and impact reporting.' },
  { id: 'p2', title: 'BoardTrack — Governance Dashboard', tags: ['React','Base44','Realtime'], metric: 'Reduces meeting prep by 70%.' },
]

export default function ProjectsShowcase(){
  const [open, setOpen] = useState<Project | null>(null)

  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sample.map(p => (
          <ProjectCard key={p.id} title={p.title} tags={p.tags} metric={p.metric} onOpen={()=>setOpen(p)} />
        ))}
      </div>

      <ProjectModal open={!!open} onClose={()=>setOpen(null)} title={open?.title ?? ''} body={open?.body} />
    </section>
  )
}
