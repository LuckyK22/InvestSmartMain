import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp, BarChart2, Package, DollarSign,
  Wallet, Rocket, PieChart, ArrowUpRight,
} from 'lucide-react'
import { services } from '../../constants/services'

const iconMap = { TrendingUp, BarChart2, Package, DollarSign, Wallet, Rocket, PieChart }

const sharedMotion = (cardIdx) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: cardIdx * 0.07 },
  whileHover: { y: -5, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
})

function CardButton({ service, cardIdx, href }) {
  const [hovered, setHovered] = useState(false)
  const Icon = iconMap[service.icon] || TrendingUp

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="service-card"
      {...sharedMotion(cardIdx)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 24px 24px',
        borderRadius: 14,
        background: hovered ? 'oklch(16% 0.115 265)' : 'var(--beige)',
        border: hovered
          ? '1px solid oklch(76% 0.115 82 / 0.45)'
          : '1px solid rgba(28,43,73,0.15)',
        boxShadow: hovered
          ? '0 28px 64px -10px oklch(16% 0.115 265 / 0.6), 0 0 0 1px oklch(76% 0.115 82 / 0.18)'
          : '0 2px 10px -2px rgba(28,43,73,0.07)',
        textDecoration: 'none',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.4s ease',
      }}
    >
      {/* Radial gold glow — top-right corner */}
      <div
        style={{
          position: 'absolute', top: '-40px', right: '-40px',
          width: '160px', height: '160px', borderRadius: '50%',
          background: 'radial-gradient(circle, oklch(76% 0.115 82 / 0.12) 0%, transparent 70%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Top accent bar */}
      <motion.div
        animate={{ width: hovered ? '100%' : '56px' }}
        transition={{ duration: 0.4, ease: [0.2, 0.7, 0.3, 1] }}
        style={{
          position: 'absolute', top: 0, left: 0, height: 4,
          background: hovered
            ? 'linear-gradient(90deg, var(--gold-deep), oklch(76% 0.115 82))'
            : 'var(--gold)',
          borderRadius: '0 0 4px 0',
          boxShadow: hovered ? '0 0 14px oklch(76% 0.115 82 / 0.55)' : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      />

      {/* Icon box */}
      <div style={{
        width: 48, height: 48, borderRadius: 10, flexShrink: 0,
        background: hovered ? 'oklch(76% 0.115 82 / 0.18)' : 'oklch(76% 0.115 82 / 0.12)',
        border: hovered
          ? '1px solid oklch(76% 0.115 82 / 0.55)'
          : '1px solid oklch(76% 0.115 82 / 0.22)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 22, color: 'var(--gold)',
        boxShadow: hovered ? '0 0 22px oklch(76% 0.115 82 / 0.3)' : 'none',
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.35s ease',
      }}>
        <Icon size={20} />
      </div>

      <span style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '10px', letterSpacing: '0.15em',
        textTransform: 'uppercase', color: 'var(--gold)',
        display: 'block', marginBottom: 8,
      }}>
        {service.tag}
      </span>

      <h3 style={{
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 700, fontSize: '16px',
        color: 'var(--royal)',
        margin: '0 0 10px', lineHeight: 1.3,
        transition: 'color 0.3s ease',
      }}>
        {service.title}
      </h3>

      <p style={{
        fontSize: '13.5px', lineHeight: 1.65,
        color: 'var(--royal-deep)',
        margin: '0 0 20px', flex: 1,
        transition: 'color 0.3s ease',
      }}>
        {service.description}
      </p>

      {/* CTA button */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
        width: '100%', padding: '12px 18px', borderRadius: 10,
        background: hovered ? 'var(--gold)' : 'var(--gold-deep)',
        color: hovered ? 'var(--royal-deep)' : '#fff',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 600, fontSize: '13.5px',
        boxShadow: hovered ? '0 6px 20px oklch(76% 0.115 82 / 0.45)' : 'none',
        transition: 'background 0.3s ease, color 0.3s ease, box-shadow 0.35s ease',
      }}>
        Get started <ArrowUpRight size={14} />
      </div>
    </motion.a>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: 'var(--paper)' }} className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-8 sm:px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '16px', letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--gold)',
            margin: '0 0 18px',
          }}>
            Services
          </p>
          <h2 style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(26px, 3.4vw, 46px)',
            lineHeight: 1.12,
            letterSpacing: '-0.025em',
            color: 'var(--ink)',
            margin: 0,
          }}>
            Market access and investment support<br />under one trusted relationship.
          </h2>
        </motion.div>

        {/* Card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const href = s.external ? s.href : 'https://myinvestsmart.in/accountopening.php'
            return <CardButton key={s.id} service={s} cardIdx={i} href={href} />
          })}
        </div>
      </div>
    </section>
  )
}
