'use client'

import { useEffect, useState } from 'react'
import { MinimalHeader } from '@/components/minimal-header'
import { HeroSection } from '@/components/hero-section'
import { ProjectsGrid } from '@/components/projects-grid'
import { SkillsSection } from '@/components/skills-section'
import { ContactSection } from '@/components/contact-section'

const DEFAULT_PROJECTS = [
  {
    id: '1',
    title: 'DevTinder',
    description: 'A full-stack web application for developers to connect, share profiles, and collaborate on projects. Built with React, Node.js, and MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    link: '#',
    github: 'https://github.com/piyusdev2006/dev-tinder',
  },
  {
    id: '2',
    title: 'Chat Application',
    description: 'Real-time chat application with user authentication, message history, and online status tracking. Implemented with WebSocket technology.',
    tags: ['React', 'Node.js', 'WebSocket', 'Firebase', 'Tailwind CSS'],
    link: '#',
    github: 'https://github.com/piyusdev2006/chat-app',
  },
  {
    id: '3',
    title: 'Voting Application',
    description: 'Secure voting platform with user authentication, real-time vote counting, and result visualization. Features admin dashboard and result analytics.',
    tags: ['React', 'Express', 'PostgreSQL', 'JWT', 'Chart.js'],
    link: '#',
    github: 'https://github.com/piyusdev2006/voting-app',
  },
]

const DEFAULT_SKILLS = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'C++', 'Java', 'Python', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Docker', 'AWS'],
  },
]

export default function Home() {
  const [profileImage, setProfileImage] = useState<string>()
  const [userInfo, setUserInfo] = useState({
    name: 'Naveen Singh',
    title: 'Full Stack Developer',
    description: 'Building beautiful, performant web applications with modern technologies. Passionate about clean code, user experience, and continuous learning.',
    email: 'naveensingh@example.com',
    github: 'https://github.com/piyusdev2006',
    linkedin: 'https://linkedin.com/in/naveensingh',
    leetcode: 'https://leetcode.com/u/Navi_2006/',
  })

  useEffect(() => {
    // Try to load saved image first
    const savedImage = localStorage.getItem('profileImage')
    if (savedImage) {
      setProfileImage(savedImage)
    } else {
      // Fallback to GitHub profile image
      setProfileImage('https://github.com/piyusdev2006.png')
    }

    // Load saved user info
    const savedUserInfo = localStorage.getItem('userInfo')
    if (savedUserInfo) {
      try {
        setUserInfo(JSON.parse(savedUserInfo))
      } catch (e) {
        console.error('Failed to load user info')
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      <MinimalHeader />

      <HeroSection
        profileImage={profileImage}
        name={userInfo.name}
        title={userInfo.title}
        description={userInfo.description}
      />

      <section aria-labelledby="projects-heading">
        <ProjectsGrid projects={DEFAULT_PROJECTS} />
      </section>

      <section aria-labelledby="skills-heading">
        <SkillsSection skills={DEFAULT_SKILLS} />
      </section>

      <ContactSection
        email={userInfo.email}
        github={userInfo.github}
        linkedin={userInfo.linkedin}
        leetcode={userInfo.leetcode}
      />

      <footer className="border-t border-zinc-800 py-8 px-4 sm:px-6 lg:px-8" role="contentinfo">
        <div className="max-w-4xl mx-auto text-center text-zinc-500 text-sm">
          <p>Built with Next.js, React, and Tailwind CSS. Deployed on Vercel.</p>
          <p className="mt-2">© {new Date().getFullYear()} Naveen Singh. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
