import React from 'react'

export default function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full px-5 py-3 bg-white/5 text-white placeholder-white/50 rounded-[18px] border border-white/10 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all ${className}`}
      {...props}
    />
  )
}
