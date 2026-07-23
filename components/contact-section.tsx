'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ContactSectionProps {
  email: string
  github?: string
  linkedin?: string
  leetcode?: string
}

export function ContactSection({ email, github, linkedin, leetcode }: ContactSectionProps) {
  return (
    <motion.section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-zinc-400 mb-8"
        >
          I&apos;m always interested in hearing about new projects and opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <a
            href={`mailto:${email}`}
            className="px-6 py-3 bg-cyan-500/20 border border-cyan-400/50 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-colors"
          >
            Email Me
          </a>
          <a
            href="#"
            className="px-6 py-3 text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-6"
        >
          {github && (
            <Link
              href={github}
              className="text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </Link>
          )}
          {linkedin && (
            <Link
              href={linkedin}
              className="text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </Link>
          )}
          {leetcode && (
            <Link
              href={leetcode}
              className="text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              LeetCode
            </Link>
          )}
        </motion.div>
      </div>
    </motion.section>
  )
}
