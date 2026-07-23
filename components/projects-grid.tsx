'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  link?: string
  github?: string
}

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group border border-zinc-800 rounded-lg p-6 hover:border-cyan-400/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-zinc-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-cyan-500/10 border border-cyan-400/30 rounded text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.link && (
                  <Link
                    href={project.link}
                    className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                  >
                    Live Demo →
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                  >
                    GitHub →
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
