import { motion } from 'framer-motion'

const researchBoxes = [
  'Business quality',
  'Risk awareness',
  'Disciplined wealth generation',
]

export default function ResearchSection() {
  return (
    <section
      style={{
        background: 'var(--beige)',
        borderTop: '1px solid var(--beige-line)',
        padding: '80px 0',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8 sm:px-5">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: title + text */}
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
              Research
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
              Better investing begins
              <br />with better research.
            </h2>

            <div
              style={{
                width: 40,
                height: 3,
                background: 'var(--gold)',
                borderRadius: 2,
                margin: '24px 0',
              }}
            />

            <p
              style={{
                fontSize: '15.5px',
                lineHeight: 1.72,
                color: 'var(--ink-soft)',
                margin: 0,
                maxWidth: 480,
              }}
            >
              Markets can be noisy.
              Investsmart's approach is grounded in business quality, valuation
              discipline, risk awareness and long-term context.
            </p>

            <p
              style={{
                fontSize: '15.5px',
                lineHeight: 1.72,
                color: 'var(--ink-soft)',
                margin: '16px 0 0',
                maxWidth: 480,
              }}
            >
              Helping clients have more meaningful conversations across equity
              exposure, mutual funds and portfolio structure.
            </p>
          </motion.div>

          {/* Right: 3 stacked boxes */}
          <div className="flex flex-col gap-3 lg:pt-2">
            {researchBoxes.map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                className="w-full lg:w-[88%]"
                style={{
                  padding: '20px 28px',
                  borderRadius: 8,
                  background: 'var(--royal-deep)',
                  border: '1px solid oklch(100% 0 0 / 0.08)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: 'var(--paper)',
                  letterSpacing: '0.005em',
                }}
              >
                {label}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
