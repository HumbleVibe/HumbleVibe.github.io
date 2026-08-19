import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero/Hero'
import TechMatrix from '../components/TechMatrix'
import ProjectsShowcase from '../components/Projects/ProjectsShowcase'
import Timeline from '../components/Timeline'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

export default function Page(){
  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 py-8">
      <NavBar />
      <section className="mt-8">
        <Hero />
      </section>

      <TechMatrix />

      <ProjectsShowcase />

      <Timeline />

      <CTABanner />

      <Footer />
    </main>
  )
}
