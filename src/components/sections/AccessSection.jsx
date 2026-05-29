import { motion } from 'framer-motion'

const platformBoxes = [
  'My Investsmart App',
  'MF Platform',
  'Back-office',
  'BSE BOW',
  'Dealer Orders',
  'Official Channels',
]

export default function AccessSection() {
  return (
    <section
      style={{
        background: 'var(--paper)',
        borderTop: '1px solid var(--beige-line)',
        padding: '80px 0',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8 sm:px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[680px] mx-auto text-center mb-12"
        >
          <p style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '16px', letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--gold)',
            margin: '0 0 20px',
          }}>
            Platform Access
          </p>
          <h2
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(28px, 3.8vw, 52px)',
              lineHeight: 1.08,
              letterSpacing: '-0.028em',
              color: 'var(--ink)',
              margin: 0,
            }}
          >
            Modern access,
            <br />with people behind it.
          </h2>

          <p
            style={{
              fontSize: '15.5px',
              lineHeight: 1.72,
              color: 'var(--ink-soft)',
              margin: '22px auto 0',
              maxWidth: 600,
            }}
          >
            Investsmart is modernising the client experience through app access, MF platform,
            portfolio analytics, official communication channels and back-office reporting
            while continuing{' '}
            <span style={{ textDecoration: 'underline', textDecorationColor: 'var(--gold)' }}>
              personalised
            </span>{' '}
            dealer and operations support.
          </p>
        </motion.div>

        {/* Platform boxes grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {platformBoxes.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              style={{
                padding: '18px 14px',
                borderRadius: 8,
                background: 'var(--royal-deep)',
                border: '1px solid oklch(100% 0 0 / 0.08)',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 700,
                fontSize: '13px',
                color: 'var(--paper)',
                textAlign: 'center',
                lineHeight: 1.35,
                letterSpacing: '0.005em',
              }}
            >
              {label}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
