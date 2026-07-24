'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { motion } from 'framer-motion'

export function MinimalHeader() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-zinc-800/50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Naveen Singh
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ color: '#06b6d4' }}
                className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
                aria-label={item.label}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}
