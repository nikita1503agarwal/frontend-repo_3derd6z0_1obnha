import React from 'react'
import Card from './ui/Card'

const features = [
  {
    k: '01',
    t: 'Orchestrate Everything',
    d: 'Compose multi-agent systems with a visual canvas. Branch, loop and observe in real-time.'
  },
  {
    k: '02',
    t: 'Tasteful Defaults',
    d: 'A minimal system that makes good decisions by default. You focus on ideas, not boilerplate.'
  },
  {
    k: '03',
    t: 'Enterprise-Ready',
    d: 'Audit logs, roles, rate-limits and encryption — all designed with a luxury mindset.'
  },
  {
    k: '—',
    t: 'Human in the Loop',
    d: 'Curate outputs like an editor. Inline annotations, approvals and versioning.'
  }
]

export default function EditorialGrid() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          <Card className="p-10 md:p-12 col-span-2">
            <div className="flex items-start justify-between">
              <h2 className="text-white text-[40px] md:text-[56px] font-black tracking-[-0.04em] leading-[0.95] max-w-xl">
                Build AI like an editor, not an engineer
              </h2>
              <span className="text-white/60 font-semibold">Vol. I</span>
            </div>
            <p className="text-white/75 mt-6 max-w-xl text-lg">
              Our interface borrows from magazine layouts. Asymmetric, bold and designed to showcase ideas. Every workflow reads like a story.
            </p>
          </Card>

          <div className="grid gap-6 md:gap-8">
            {features.slice(0,2).map(f => (
              <Card key={f.k} className="p-8 md:p-10">
                <div className="text-white/40 text-sm font-bold tracking-widest">{f.k}</div>
                <h3 className="text-white text-2xl md:text-3xl font-extrabold tracking-[-0.03em] mt-2">{f.t}</h3>
                <p className="text-white/70 mt-3">{f.d}</p>
              </Card>
            ))}
          </div>

          <Card className="p-10 md:p-12 md:col-span-2">
            <div className="grid md:grid-cols-2 gap-10 items-end">
              <div>
                <div className="text-white/40 text-sm font-bold tracking-widest">CASE STUDY</div>
                <h3 className="text-white text-3xl md:text-4xl font-extrabold tracking-[-0.03em] mt-2">10x faster GenAI launches</h3>
                <p className="text-white/70 mt-3">Teams move from prototype to production in days, not months, with our opinionated stack and governance built-in.</p>
              </div>
              <div className="h-48 md:h-64 rounded-[20px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1600&auto=format&fit=crop" alt="editorial" className="w-full h-full object-cover" />
              </div>
            </div>
          </Card>

          <div className="grid gap-6 md:gap-8">
            {features.slice(2).map(f => (
              <Card key={f.k} className="p-8 md:p-10">
                <div className="text-white/40 text-sm font-bold tracking-widest">{f.k}</div>
                <h3 className="text-white text-2xl md:text-3xl font-extrabold tracking-[-0.03em] mt-2">{f.t}</h3>
                <p className="text-white/70 mt-3">{f.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
