import Link from 'next/link'

// Index of the two homepage concepts. Not the live site: the live site is
// Kellelectric/Googlesitesitemap, deployed at kellelectricals.com.
const concepts = [
  {
    href: '/daylight',
    name: 'Option A: Daylight style',
    note: 'Light and warm. Full-width photo hero, yellow and green bands, comparison table, FAQ, quote form.',
  },
  {
    href: '/t1',
    name: 'Option B: T1 Energy style',
    note: 'Dark green and premium. Rounded photo tiles, huge figures, coverage block, giant wordmark footer.',
  },
]

export default function Home() {
  return (
    <main style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', background: '#13322C', color: '#ECECE6', minHeight: '100vh', padding: '80px 24px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <p style={{ letterSpacing: '.14em', textTransform: 'uppercase', fontSize: 12, color: '#F5B700' }}>Kell Electricals · redesign concepts</p>
        <h1 style={{ fontWeight: 300, fontSize: 48, letterSpacing: '-.03em', margin: '12px 0 40px' }}>Two homepage directions</h1>
        {concepts.map((c) => (
          <Link key={c.href} href={c.href} style={{ display: 'block', textDecoration: 'none', border: '1px solid rgba(236,236,230,.2)', borderRadius: 18, padding: 28, marginBottom: 16 }}>
            <div style={{ fontSize: 24, fontWeight: 500 }}>{c.name} →</div>
            <div style={{ marginTop: 8, color: 'rgba(236,236,230,.7)', lineHeight: 1.6 }}>{c.note}</div>
          </Link>
        ))}
      </div>
    </main>
  )
}
