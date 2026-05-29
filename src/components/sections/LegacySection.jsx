import { motion } from 'framer-motion'

const featureTags = [
  'Market legacy',
  'Family business values',
  'Professional discipline',
  'Modern client rails',
]

const reveal = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }

export default function LegacySection() {
  return (
    <section
      style={{
        background: 'var(--paper)',
        borderTop: '0px solid var(--gold)',
        padding: '80px 0 72px',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8 sm:px-5">
        <div className="max-w-[780px]">

          <p style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '16px', letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--gold)',
            margin: '0 0 20px',
          }}>
            Our Legacy
          </p>
          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 68px)',
              lineHeight: 1.06,
              letterSpacing: '-0.03em',
              color: 'var(--ink)',
              margin: 0,
            }}
          >
            Legacy built on market depth.{' '}
            <span style={{ color: 'var(--gold)' }}>
              Modernised for today's investor.
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.14 }}
            style={{
              fontSize: '16.5px',
              lineHeight: 1.7,
              color: 'var(--ink-soft)',
              maxWidth: 640,
              margin: '28px 0 0',
            }}
          >
            Investsmart carries a 40+ years of capital-market legacy shaped across market cycles,
            client relationships and Indian equities.
          </motion.p>

          <motion.p
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.24 }}
            style={{
              fontSize: '16.5px',
              lineHeight: 1.7,
              color: 'var(--ink-soft)',
              maxWidth: 640,
              margin: '14px 0 0',
            }}
          >
            The next generation is strengthening that foundation with professional operating
            systems, sharper review processes, digital platforms and modern communication rails.
          </motion.p>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.36 }}
            className="flex flex-wrap gap-3"
            style={{ marginTop: '36px' }}
          >
            {featureTags.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                style={{
                  padding: '11px 20px',
                  borderRadius: 6,
                  background: 'var(--paper)',
                  border: '1px solid var(--beige-line)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 600,
                  fontSize: '13.5px',
                  color: 'var(--ink)',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                }}
              >
                {tag}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
