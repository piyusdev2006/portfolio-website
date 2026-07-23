'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroSectionProps {
  profileImage?: string
  name: string
  title: string
  description: string
}

export function HeroSection({ profileImage, name, title, description }: HeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {profileImage && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0"
            >
              <Image
                src={profileImage}
                alt={name}
                fill
                className="rounded-lg object-cover"
              />
            </motion.div>
          )}

          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-2"
            >
              {name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-cyan-400 mb-4"
            >
              {title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base text-zinc-400 leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4 mt-6"
            >
              <a
                href="#projects"
                className="px-6 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-colors"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-2 text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
