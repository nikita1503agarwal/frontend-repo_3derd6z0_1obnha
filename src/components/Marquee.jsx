import React from 'react'

const brands = ['Numero', 'Vogue', 'Kinfolk', 'Monocle', 'Dazed', 'Wallpaper*']

export default function Marquee() {
  return (
    <div className="relative py-10 border-y border-white/10">
      <div className="overflow-hidden">
        <div className="flex gap-10 animate-[marquee_20s_linear_infinite] whitespace-nowrap text-white/40 font-semibold tracking-[0.2em] uppercase">
          {[...brands, ...brands, ...brands].map((b, i) => (
            <span key={i} className="opacity-70">{b}</span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
