import React from 'react'
import { shadows } from '../../theme'

export default function Card({ children, className = '' }) {
  return (
    <div
      className={`relative rounded-[24px] bg-white/5 backdrop-blur-sm border border-white/10 shadow-[${shadows.xl}] ${className}`}
      style={{ boxShadow: shadows.xl }}
    >
      {/* soft inner border */}
      <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-white/10" />
      {children}
    </div>
  )
}
