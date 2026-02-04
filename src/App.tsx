import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import CursorGlow from './components/CursorGlow'
import GlowButton from './components/GlowButton'
import Modal from './components/Modal'
import ProjectCard from './components/ProjectCard'
import SectionHeading from './components/SectionHeading'
import SkillCard from './components/SkillCard'
import TimelineItem from './components/TimelineItem'
import {
  achievements,
  heroSubtitle,
  personalInfo,
  projects,
  skills,
  softSkills,
  timeline,
} from './data/portfolio'
import { useTypewriterText } from './hooks/useTypewriterText'

const App = () => {
  const [isDark, setIsDark] = useState(true)
  const [activeAchievement, setActiveAchievement] = useState<number | null>(null)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  const heroTyped = useTypewriterText(heroSubtitle, 40, 1800)
  const aboutTyped = useTypewriterText(
    '> whoami\n' +
      'Pedapolu Karthik\n' +
      'Java Full Stack Developer\n' +
      'AI Student\n' +
      'Passionate about building scalable web apps',
    26,
    2400
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12
      const y = (event.clientY / window.innerHeight - 0.5) * 12
      setParallax({ x, y })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  const navigation = useMemo(
    () => [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Journey', href: '#journey' },
      { label: 'Achievements', href: '#achievements' },
      { label: 'Contact', href: '#contact' },
    ],
    []
  )

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-night dark:text-white">
      <CursorGlow />
      <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-white/5 dark:bg-black/40">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan p-[2px] shadow-glow">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950 text-sm font-semibold text-white">
                PK
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {personalInfo.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {personalInfo.title}
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-300 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-neon-cyan"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="rounded-full border border-slate-200/60 bg-white/80 px-4 py-2 text-xs text-slate-900 transition hover:border-neon-cyan/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
            onClick={() => setIsDark((prev) => !prev)}
          >
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-hero-linear bg-[length:200%_200%] animate-gradient" />
          <div className="absolute inset-0 bg-hero-radial opacity-80" />
          <div
            className="absolute right-12 top-20 hidden h-72 w-72 rounded-full bg-neon-purple/20 blur-[120px] md:block"
            style={{ transform: `translate(${parallax.x * -1}px, ${parallax.y * -1}px)` }}
          />
          <div
            className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-neon-cyan/20 blur-[140px]"
            style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
          />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <AnimatePresence>
              <motion.div
                key="hero"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-3xl"
              >
                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-neon-cyan/80">
                  {personalInfo.tagline}
                </p>
                <h1 className="text-4xl font-semibold text-white md:text-6xl">
                  <span className="neon-text">{personalInfo.name}</span>
                </h1>
                <p className="mt-5 text-base text-slate-300 md:text-lg">
                  <span>{heroTyped}</span>
                  <span className="ml-1 inline-block h-5 w-[2px] animate-blink bg-neon-cyan" />
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <GlowButton href="#projects" variant="primary">
                    View Projects
                  </GlowButton>
                  <GlowButton
                    href="https://drive.google.com/file/d/1pQUOPwP35MGhvX45vsCoh1De5SnI_8Qv/view?usp=drive_link"
                    variant="secondary"
                  >
                    Download Resume
                  </GlowButton>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span>{personalInfo.email}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-500" />
                  <span>{personalInfo.phone}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section id="about" className="relative py-24">
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionHeading
              eyebrow="About"
              title="HELLO, I'M KARTHIK"
              subtitle="a developer who builds ideas into clean, powerful code."
            />
            <div className="terminal-card mx-auto max-w-3xl">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-400" />
                <span className="terminal-dot bg-yellow-400" />
                <span className="terminal-dot bg-green-400" />
                <p className="ml-3 text-xs text-slate-400">karthik@portfolio:~</p>
              </div>
              <div className="terminal-body">
                <pre className="whitespace-pre-line text-sm text-slate-700 dark:text-slate-200">
                  {aboutTyped}
                  <span className="ml-1 inline-block h-4 w-[2px] animate-blink bg-neon-cyan" />
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionHeading
              eyebrow="Skills"
              title="Core Stack & Strengths"
              subtitle="Crafted for scalable applications, secure APIs, and polished UIs."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="relative py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionHeading
              eyebrow="Projects"
              title="Featured Work"
              subtitle="A curated collection of real-world projects crafted with clean code, modern design, and purpose.."
            />
            <div className="no-scrollbar flex gap-6 overflow-x-auto pb-4">
              {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="py-24">
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionHeading
              eyebrow="Journey"
              title="Education & Milestones"
              subtitle="A glowing timeline of growth, learning, and delivery."
            />
            <div className="relative space-y-8 border-l border-neon-cyan/30 pl-8">
              {timeline.map((item) => (
                <TimelineItem key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionHeading
              eyebrow="Achievements"
              title="Certificates & Wins"
              subtitle="Click any card for a quick preview."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {achievements.map((achievement, index) => (
                <button
                  key={achievement.title}
                  className="glass-card text-left transition hover:-translate-y-1"
                  onClick={() => {
                    if (achievement.link) {
                      window.open(achievement.link, '_blank', 'noreferrer')
                      return
                    }
                    setActiveAchievement(index)
                  }}
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    {achievement.detail}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-24">
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s Build Something Together"
              subtitle="Reach out for collaborations, internships, or full-time roles."
            />
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <form className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/80 p-8 backdrop-blur dark:border-white/10 dark:bg-white/5">
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    required
                    className="peer w-full rounded-xl border border-slate-200/60 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-neon-cyan/60 dark:border-white/10 dark:text-white"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="pointer-events-none absolute left-4 top-3 text-xs text-slate-400 transition-all peer-focus:-top-2 peer-focus:text-neon-cyan peer-focus:text-[10px] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-[10px]"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    required
                    className="peer w-full rounded-xl border border-slate-200/60 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-neon-cyan/60 dark:border-white/10 dark:text-white"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute left-4 top-3 text-xs text-slate-400 transition-all peer-focus:-top-2 peer-focus:text-neon-cyan peer-focus:text-[10px] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-[10px]"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="peer w-full rounded-xl border border-slate-200/60 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-neon-cyan/60 dark:border-white/10 dark:text-white"
                    placeholder=" "
                  />
                  <label
                    htmlFor="message"
                    className="pointer-events-none absolute left-4 top-3 text-xs text-slate-400 transition-all peer-focus:-top-2 peer-focus:text-neon-cyan peer-focus:text-[10px] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-[10px]"
                  >
                    Message
                  </label>
                </div>
                <GlowButton variant="primary" className="w-full">
                  Send Message
                </GlowButton>
              </form>
              <div className="space-y-6">
                <div className="glass-card">
                  <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan/70">
                    Direct
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {personalInfo.email}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{personalInfo.phone}</p>
                </div>
                <div className="glass-card">
                  <p className="text-xs uppercase tracking-[0.3em] text-neon-purple/70">
                    Socials
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <GlowButton href={personalInfo.github} variant="secondary">
                      GitHub
                    </GlowButton>
                    <GlowButton href={personalInfo.linkedIn} variant="secondary">
                      LinkedIn
                    </GlowButton>
                    <GlowButton href={`mailto:${personalInfo.email}`} variant="secondary">
                      Email
                    </GlowButton>
                  </div>
                </div>
                <div className="glass-card">
                  <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan/70">
                    Resume
                  </p>
                  <p className="mt-3 text-sm text-slate-300">
                    Download the latest resume for interview prep.
                  </p>
                  <GlowButton
                    href="https://drive.google.com/file/d/1pQUOPwP35MGhvX45vsCoh1De5SnI_8Qv/view?usp=drive_link"
                    variant="primary"
                    className="mt-4 w-full"
                  >
                    Download Resume
                  </GlowButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.main>

      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-slate-500 md:flex-row">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
          <p>Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </footer>

      <Modal
        open={activeAchievement !== null}
        title={activeAchievement !== null ? achievements[activeAchievement].title : ''}
        description={
          activeAchievement !== null ? achievements[activeAchievement].detail : ''
        }
        link={
          activeAchievement !== null ? achievements[activeAchievement].link : undefined
        }
        onClose={() => setActiveAchievement(null)}
      />
    </div>
  )
}

export default App
