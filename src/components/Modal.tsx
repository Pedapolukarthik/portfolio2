import { AnimatePresence, motion } from 'framer-motion'

type ModalProps = {
  open: boolean
  title: string
  description: string
  link?: string
  onClose: () => void
}

const Modal = ({ open, title, description, link, onClose }: ModalProps) => (
  <AnimatePresence>
    {open ? (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="w-full max-w-lg rounded-3xl border border-white/10 bg-white p-8 text-left text-slate-900 shadow-glowStrong dark:bg-slate-950 dark:text-white"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan/70">
                Certificate
              </p>
              <h3 className="mt-2 text-xl font-semibold">{title}</h3>
            </div>
            <button
              className="rounded-full border border-slate-200/60 px-3 py-1 text-xs text-slate-600 hover:border-neon-cyan/60 hover:text-slate-900 dark:border-white/10 dark:text-slate-300 dark:hover:text-white"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            {description}
          </p>
          {link ? (
            <a
              className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-900 transition hover:border-neon-cyan/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              Open Certificate
            </a>
          ) : null}
        </motion.div>
      </motion.div>
    ) : null}
  </AnimatePresence>
)

export default Modal
