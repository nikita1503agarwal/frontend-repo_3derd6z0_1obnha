import React from 'react'
import Button from './ui/Button'

export default function Footer() {
  return (
    <footer className="relative py-20">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-end">
          <div>
            <h3 className="text-white text-[40px] md:text-[56px] font-black tracking-[-0.04em] leading-[0.95]">
              Ready to build with taste?
            </h3>
            <p className="text-white/70 mt-4 max-w-md">Start free. Bring your team. Move like a magazine desk — quick, curated, and confident.</p>
          </div>
          <div className="md:justify-self-end">
            <Button className="min-w-[220px]">Request Access</Button>
          </div>
        </div>
        <div className="mt-12 text-white/40 text-sm flex flex-wrap items-center gap-6">
          <span>© {new Date().getFullYear()} Your Company</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  )
}
