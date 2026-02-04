import { motion } from 'framer-motion'

type TimelineItemProps = {
  title: string
  place: string
  time: string
  detail: string
}

const TimelineItem = ({ title, place, time, detail }: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className="relative rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-black/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-black/30"
  >
    <div className="absolute -left-[9px] top-7 h-4 w-4 rounded-full border border-neon-cyan/50 bg-neon-cyan/80 shadow-glow" />
    <p className="text-xs uppercase tracking-[0.3em] text-neon-purple/70">
      {time}
    </p>
    <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
      {title}
    </h3>
    <p className="text-sm text-slate-600 dark:text-slate-300">{place}</p>
    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
      {detail}
    </p>
  </motion.div>
)

export default TimelineItem
