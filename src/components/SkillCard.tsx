import type { MouseEvent } from 'react'
import { useId, useState } from 'react'

type SkillCardProps = {
  name: string
  level: number
}

const SkillCard = ({ name, level }: SkillCardProps) => {
  const gradientId = useId()
  const [style, setStyle] = useState({ transform: 'rotateX(0deg) rotateY(0deg)' })

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateX = ((y / rect.height) * 16 - 8) * -1
    const rotateY = (x / rect.width) * 16 - 8
    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    })
  }

  return (
    <div
      className="group relative rounded-2xl border border-slate-200/70 bg-white/80 p-6 text-center shadow-lg shadow-black/10 transition-transform duration-300 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20"
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={() => setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl border border-neon-cyan/40 shadow-glow" />
      </div>
      <svg className="mx-auto h-20 w-20" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="52"
          stroke="rgba(148, 163, 184, 0.2)"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r="52"
          stroke={`url(#${gradientId})`}
          strokeWidth="10"
          fill="none"
          strokeDasharray={`${(level / 100) * 326} 326`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
      <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-100">
        {name}
      </p>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
        {level}% proficiency
      </p>
    </div>
  )
}

export default SkillCard
