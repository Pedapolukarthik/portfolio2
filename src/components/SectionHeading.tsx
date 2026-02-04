type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
}

const SectionHeading = ({ eyebrow, title, subtitle }: SectionHeadingProps) => (
  <div className="mb-10 text-center">
    {eyebrow ? (
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-neon-cyan/70">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
      {title}
    </h2>
    {subtitle ? (
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 md:text-base">
        {subtitle}
      </p>
    ) : null}
  </div>
)

export default SectionHeading
