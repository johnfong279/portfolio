type ButtonProps = {
  href: string
  children: string
  variant?: 'primary' | 'outline'
  className?: string
}

function Button({
  href,
  children,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseClassName =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide shadow-soft'

  const variantClassName =
    variant === 'primary'
      ? 'bg-accent-500 text-white hover:bg-accent-600'
      : 'border border-neutral-300 bg-white text-neutral-900 hover:border-accent-500 hover:text-accent-500'

  const externalProps = href.startsWith('http') || href.startsWith('mailto:')
    ? { target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <a href={href} className={`${baseClassName} ${variantClassName} ${className}`} {...externalProps}>
      {children}
    </a>
  )
}

export default Button
