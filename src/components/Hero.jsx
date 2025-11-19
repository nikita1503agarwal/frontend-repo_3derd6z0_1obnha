import React from 'react'
import Spline from '@splinetool/react-spline'
import Button from './ui/Button'
import { typography } from '../theme'

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* overlay gradients for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(0,0,0,0.1),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b0b10] to-transparent" />

      {/* headline */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 h-full flex items-end pb-16">
        <div className="max-w-3xl">
          <h1 className={`${typography.display} text-white mb-6`}>AI built for the magazine age</h1>
          <p className="text-white/80 max-w-xl mb-8 text-lg leading-relaxed">
            Premium tools for teams that demand taste, speed and control. Create, orchestrate and ship AI workflows with an editorial eye.
          </p>
          <div className="flex items-center gap-3">
            <Button>Get Started</Button>
            <Button variant="ghost">See Live Demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
