import { motion } from 'framer-motion'

const values = [
  'Relationships over acquisition',
  'Judgment before action',
  'Service with accountability',
]

export default function AboutSection() {
  return (
    <section style={{ background: 'var(--beige)', borderTop: '1px solid var(--beige-line)' }} className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-8 sm:px-5">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: philosophy text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '16px', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--ink-mute)',
              margin: '0 0 20px',
            }}>
              Our Philosophy
            </p>
            <h2 style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(30px, 3.6vw, 50px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--ink)',
              margin: 0,
            }}>
              Capital deserves more<br />than transactions.
            </h2>
            <div style={{
              width: 44, height: 3,
              background: 'var(--gold)',
              borderRadius: 2,
              margin: '24px 0',
            }} />
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--ink-soft)', margin: 0 }}>
              Investsmart has grown through long-standing relationships, referrals and client trust.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--ink-soft)', margin: '16px 0 0' }}>
              Our approach is to understand the client, respect the capital, document the process and
              support market participation with discipline.
            </p>
          </motion.div>

          {/* Right: value pillars */}
          <div className="flex flex-col gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
                className="w-full lg:w-[88%]"
                style={{
                  background: 'var(--royal-deep)',
                  borderRadius: 8,
                  padding: '22px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  borderLeft: '3px solid var(--gold)',
                }}
              >
                <span style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '12px', fontWeight: 700,
                  color: 'var(--gold)', whiteSpace: 'nowrap',
                }}>
                  0{i + 1}
                </span>
                <span style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 600, fontSize: '15px',
                  color: 'var(--paper)', lineHeight: 1.35,
                }}>
                  {v}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
