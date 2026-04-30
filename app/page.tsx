'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react'

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      name: 'Project Name',
      description: 'Brief one-line description of what the project does.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      codeLink: '#',
      liveLink: '#'
    },
    {
      name: 'Another Project',
      description: 'Another brief description of this project.',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      codeLink: '#',
      liveLink: '#'
    }
  ]

  const skills = {
    'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    'Tools': ['Git', 'Docker', 'AWS', 'Vercel']
  }

  return (
    <div className="min-w-[320px] bg-background text-foreground">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-border-color bg-background' : 'bg-background'
      }`}>
        <div className="min-w-[320px] max-w-[1100px] w-full mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-foreground text-sm font-medium font-sans">Naveen Singh</div>
          <div className="hidden md:flex gap-12 text-sm font-sans">
            <a href="#work" className="text-foreground hover:text-accent transition-colors">Work</a>
            <a href="#skills" className="text-foreground hover:text-accent transition-colors">Skills</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 py-8 sm:py-12 md:py-20">
        <div className="min-w-[300px] max-w-[720px] w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Text Content */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight text-balance font-serif">
                I build things for the web.
              </h1>
              <p className="text-secondary-text mb-8 text-base leading-relaxed">
                Full-stack developer. MERN stack. Currently exploring AI engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#work" className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white hover:opacity-90 transition-opacity rounded" style={{ fontSize: '14px', fontWeight: '600' }}>
                  View Work
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border-color hover:border-accent hover:text-accent transition-colors rounded" style={{ fontSize: '14px' }}>
                  GitHub <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Avatar */}
            <div className="w-full md:w-48 md:flex-shrink-0">
              <div className="aspect-square rounded overflow-hidden border border-border-color">
                <Image 
                  src="/placeholder-user.jpg" 
                  alt="Naveen Singh" 
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-stats-bg py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="min-w-[300px] max-w-[860px] w-full mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 md:gap-8">
            <div className="border-b sm:border-r sm:border-b-0 border-border-color pb-4 sm:pb-0 sm:pr-6 md:pr-8">
              <div className="text-2xl md:text-3xl font-sans font-bold mb-2">12</div>
              <div className="text-secondary-text text-sm">Projects</div>
            </div>
            <div className="border-b sm:border-r sm:border-b-0 border-border-color pb-4 sm:pb-0 sm:pr-6 md:pr-8">
              <div className="text-2xl md:text-3xl font-sans font-bold mb-2">87%</div>
              <div className="text-secondary-text text-sm">Avg Score</div>
            </div>
            <div className="border-b sm:border-r sm:border-b-0 border-border-color pb-4 sm:pb-0 sm:pr-6 md:pr-8">
              <div className="text-2xl md:text-3xl font-sans font-bold mb-2">96</div>
              <div className="text-secondary-text text-sm">GitHub Contributions</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-sans font-bold mb-2">3+</div>
              <div className="text-secondary-text text-sm">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4">
        <div className="min-w-[280px] max-w-[860px] w-full mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 md:mb-14 font-sans">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="border border-border-color rounded p-8 md:p-10 hover:shadow-sm transition-shadow">
                <h3 className="text-lg md:text-xl font-sans font-medium mb-2">{project.name}</h3>
                <p className="text-secondary-text text-sm mb-4">{project.description}</p>
                <div className="flex gap-2 mb-6 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-200 text-foreground text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.codeLink} className="text-accent text-sm hover:opacity-70 transition-opacity flex items-center gap-1">
                    Code <ExternalLink size={14} />
                  </a>
                  <a href={project.liveLink} className="text-accent text-sm hover:opacity-70 transition-opacity flex items-center gap-1">
                    Live <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 bg-stats-bg">
        <div className="min-w-[240px] max-w-[860px] w-full mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 md:mb-14 font-sans">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-sans font-medium mb-6 text-foreground text-sm md:text-base">{category}</h3>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li key={skill} className="text-secondary-text text-sm flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 flex items-center justify-center min-h-96">
        <div className="min-w-[280px] max-w-[500px] w-full text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-10 md:mb-12 font-sans">Let&apos;s build something.</h2>
          <div className="flex flex-col gap-6 sm:gap-8">
            <a href="mailto:hello@example.com" className="text-accent hover:opacity-70 transition-opacity flex items-center justify-center gap-2 text-sm md:text-base">
              <Mail size={20} />
              Email
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-70 transition-opacity flex items-center justify-center gap-2 text-sm md:text-base">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-70 transition-opacity flex items-center justify-center gap-2 text-sm md:text-base">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-color py-8 px-4 bg-background">
        <div className="min-w-[320px] max-w-[860px] w-full mx-auto text-center text-secondary-text text-xs md:text-sm">
          © 2026 Naveen Singh · Made with Next.js
        </div>
      </footer>
    </div>
  )
}
