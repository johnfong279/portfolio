type PlaceholderImageProps = {
  label: string
  className?: string
}

function PlaceholderImage({ label, className = '' }: PlaceholderImageProps) {
  return (
    <div
      aria-label={label}
      className={`relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-100 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.14),transparent_35%),linear-gradient(135deg,#fafaf9_0%,#f5f5f4_45%,#e7e5e4_100%)]" />
      <div className="absolute -left-8 top-8 h-28 w-28 rounded-full border border-white/70 bg-white/40 blur-sm" />
      <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-accent-500/15 bg-accent-500/10" />
      <div className="relative flex h-full min-h-[260px] items-end justify-between p-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-600">
        <span>{label}</span>
        <span className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[11px] tracking-[0.18em] text-neutral-700 shadow-sm">
          Preview
        </span>
      </div>
    </div>
  )
}

export default PlaceholderImage
