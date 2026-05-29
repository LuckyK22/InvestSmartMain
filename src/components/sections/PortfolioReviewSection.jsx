import { motion } from 'framer-motion'
import { BarChart2, Activity, PieChart, Shield, Zap, TrendingUp, ArrowRight } from 'lucide-react'

const features = [
  { icon: BarChart2, label: 'Fund role clarity' },
  { icon: Activity, label: 'Scheme health' },
  { icon: PieChart, label: 'Portfolio diversification' },
  { icon: Shield, label: 'Risk suitability' },
  { icon: Zap, label: 'Action readiness' },
  { icon: TrendingUp, label: 'Returns & stability' },
]

export default function PortfolioReviewSection() {
  return (
    <section
      id="review"
      style={{ background: 'var(--beige)', borderTop: '1px solid oklch(100% 0 0 / 0.07)' }}
      className="py-20 md:py-28"
    >
      <div className="max-w-[1280px] mx-auto px-8 sm:px-5">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-20 items-center">

          {/* Left: text + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '16px', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--gold)',
              margin: '0 0 20px',
            }}>
              Portfolio Review
            </p>
            <h2 style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--royal)',
              margin: 0,
            }}>
              Many funds.<br />One portfolio.<br />Clearer decisions.
            </h2>
            <div style={{ width: 44, height: 3, background: 'var(--gold)', borderRadius: 2, margin: '24px 0' }} />
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--ink-soft)', maxWidth: 460, margin: 0 }}>
              Many investors hold good funds, but not always a good portfolio. Schemes may overlap,
              risk may be concentrated, roles may be unclear, and older choices may no longer match
              current needs.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--ink-muted)', maxWidth: 460, margin: '16px 0 0' }}>
              Investsmart Portfolio Health Review brings a structured lens to your mutual fund holdings.
            </p>
            <a
              href="https://myinvestsmart.in/contact.php"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ display: 'inline-flex', marginTop: 32 }}
            >
              Request Review <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Right: feature tag grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                    style={{
                      padding: '14px 20px',
                      borderRadius: 999,
                      background: 'var(--royal-soft)',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,  
                    }}
                  >
                    <div style={{
                      width: 42, height: 42, borderRadius: '50%',
                      background: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--gold)', flexShrink: 0,
                    }}>
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <span style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontWeight: 600, fontSize: '14px',
                      color: 'var(--paper)', lineHeight: 1.3,
                    }}>
                      {f.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
