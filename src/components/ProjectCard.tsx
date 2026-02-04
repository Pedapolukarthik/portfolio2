import { motion } from 'framer-motion'
import GlowButton from './GlowButton'

type ProjectCardProps = {
  name: string
  description: string
  role: string
  tech: string[]
  github: string
  liveDemo?: string
  featured?: boolean
}

const ProjectCard = ({
  name,
  description,
  role,
  tech,
  github,
  liveDemo,
  featured,
}: ProjectCardProps) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className={`relative flex min-w-[280px] flex-col gap-5 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur-xl transition-all duration-300 md:min-w-[360px] dark:border-white/10 dark:bg-white/5 ${
      featured ? 'shadow-glowStrong' : 'shadow-lg shadow-black/30'
    }`}
  >
    <div className="h-40 rounded-2xl bg-gradient-to-br from-neon-purple/30 via-slate-900 to-neon-cyan/20">
      <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.3em] text-white/60">
        Project Preview
      </div>
    </div>
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        {name}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
      <p className="text-xs text-neon-cyan/80">{role}</p>
    </div>
    <div className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <span
          key={item}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-600 dark:text-slate-200"
        >
          {item}
        </span>
      ))}
    </div>
    <div className="mt-auto flex flex-wrap gap-3">
      <GlowButton href={liveDemo || '#'} variant="primary" disabled={!liveDemo}>
        Live Demo
      </GlowButton>
      <GlowButton href={github} variant="secondary">
        GitHub
      </GlowButton>
    </div>
  </motion.div>
)

export default ProjectCard
