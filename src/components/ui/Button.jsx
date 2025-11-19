import React from 'react'
import { gradientClass } from '../../theme'

export default function Button({ as = 'button', children, className = '', variant = 'primary', ...props }) {
  const Comp = as
  const base = 'inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold rounded-[20px] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 active:scale-[0.98]'

  const variants = {
    primary: `${gradientClass} text-white shadow-[0_10px_24px_rgba(221,36,118,0.35)] hover:shadow-[0_16px_36px_rgba(221,36,118,0.45)]`,
    ghost: 'bg-white/5 text-white hover:bg-white/10 backdrop-blur',
    subtle: 'bg-white/8 text-white hover:bg-white/15 backdrop-blur'
  }

  return (
    <Comp className={`${base} ${variants[variant] || ''} ${className}`} {...props}>
      {children}
    </Comp>
  )
}
