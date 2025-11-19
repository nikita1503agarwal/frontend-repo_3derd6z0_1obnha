import React from 'react'
import Hero from './components/Hero'
import EditorialGrid from './components/EditorialGrid'
import Marquee from './components/Marquee'
import Footer from './components/Footer'
import { colors } from './theme'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      {/* asymmetric header */}
      <header className="relative z-20">
        <div className="container mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[14px] bg-gradient-to-br from-[#ff512f] to-[#dd2476] shadow-[0_10px_24px_rgba(221,36,118,0.35)]" />
            <span className="text-white font-extrabold tracking-[-0.04em] text-xl">LUX.AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-white/70">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </nav>
        </div>
      </header>

      <Hero />
      <Marquee />
      <main>
        <EditorialGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
