// Minimal design system for the landing experience
export const colors = {
  primaryFrom: '#ff512f', // red-orange gradient from
  primaryTo: '#dd2476',   // magenta edge for premium vibe
  bg: '#0b0b10',          // deep charcoal
  surface: 'rgba(255,255,255,0.04)',
  text: '#ffffff',
  mute: 'rgba(255,255,255,0.65)'
}

export const radii = {
  xl: '24px',
  lg: '20px',
  md: '16px'
}

export const shadows = {
  // layered, dramatic shadows
  xl: '0 20px 40px rgba(0,0,0,0.45), 0 10px 20px rgba(221,36,118,0.25)',
  lg: '0 16px 32px rgba(0,0,0,0.45), 0 4px 16px rgba(255,81,47,0.22)',
  md: '0 10px 24px rgba(0,0,0,0.35)'
}

export const typography = {
  display: 'font-black tracking-[-0.04em] leading-[0.95] text-[48px] md:text-[64px]',
  title: 'font-extrabold tracking-[-0.035em] text-[32px] md:text-[40px] leading-[1.05]',
  body: 'text-base leading-relaxed text-white/75'
}

export const gradientClass = 'bg-gradient-to-br from-[#ff512f] to-[#dd2476]';
