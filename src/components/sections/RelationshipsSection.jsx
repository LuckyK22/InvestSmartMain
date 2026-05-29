import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../constants/testimonials'

export default function RelationshipsSection() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const prev = () => setCurrent(p => (p - 1 + total) % total)
  const next = () => setCurrent(p => (p + 1) % total)

  const visible = [0, 1, 2].map(offset => (current + offset) % total)

  return (
    <section
      style={{
        background: 'var(--beige)',
        borderTop: '1px solid var(--beige-line)',
        padding: '80px 0',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8 sm:px-5">

        {/* Text block + nav row */}
        <div className="flex items-end justify-between mb-14 gap-6">
          <div className="max-w-[700px]">
            <p style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '16px', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--ink-mute)',
              margin: '0 0 20px',
            }}>
              Relationships
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
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
              Built through relationships,
              <br />not campaigns.
            </motion.h2>

            <div
              style={{
                width: 40,
                height: 3,
                background: 'var(--gold)',
                borderRadius: 2,
                margin: '24px 0',
              }}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              style={{
                fontSize: '15.5px',
                lineHeight: 1.72,
                color: 'var(--ink-soft)',
                margin: 0,
                maxWidth: 560,
              }}
            >
              For years, Investsmart has grown through referrals, family relationships
              and long-standing client confidence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.22 }}
              style={{
                fontSize: '15.5px',
                lineHeight: 1.72,
                color: 'var(--ink-soft)',
                margin: '14px 0 0',
                maxWidth: 560,
              }}
            >
              The common thread: accessibility, discretion and a serious approach
              to client capital.
            </motion.p>
          </div>

          {/* Nav buttons */}
          <div className="hidden sm:flex gap-2 shrink-0">
            <button
              onClick={prev}
              aria-label="Previous"
              style={{
                width: 44, height: 44, borderRadius: 8,
                border: '1px solid var(--beige-line)',
                background: 'var(--paper)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--ink-mute)', cursor: 'pointer',
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              style={{
                width: 44, height: 44, borderRadius: 8,
                border: '1px solid var(--beige-line)',
                background: 'var(--paper)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--ink-mute)', cursor: 'pointer',
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {visible.map((idx, pos) => {
              const t = testimonials[idx]
              const featured = pos === 0
              return (
                <motion.div
                  key={`${idx}-${pos}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: pos * 0.07 }}
                  style={{
                    borderRadius: 10,
                    padding: '28px 26px',
                    background: featured ? 'var(--royal-deep)' : 'var(--paper)',
                    border: `1px solid ${featured ? 'oklch(30% 0.135 265 / 0.9)' : 'var(--beige-line)'}`,
                    display: 'flex', flexDirection: 'column',
                  }}
                >
                  <Quote
                    size={22}
                    style={{
                      color: featured ? 'var(--gold)' : 'var(--beige-line)',
                      marginBottom: 16,
                    }}
                  />

                  <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={17}
                        fill={featured ? 'var(--gold)' : '#d97706'}
                        style={{ color: featured ? 'var(--gold)' : '#d97706' }}
                      />
                    ))}
                  </div>

                  <p style={{
                    fontSize: '15px', lineHeight: 1.72,
                    color: featured ? '#fff' : 'var(--ink-soft)',
                    margin: '0 0 24px', fontStyle: 'italic', flex: 1,
                  }}>
                    "{t.text}"
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: featured
                        ? 'oklch(76% 0.115 82 / 0.18)'
                        : 'oklch(22% 0.110 265 / 0.09)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontWeight: 700, fontSize: '12px',
                      color: featured ? 'var(--paper)' : 'var(--royal)',
                      flexShrink: 0,
                    }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div style={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontWeight: 600, fontSize: '14px',
                        color: featured ? '#fff' : 'var(--ink)',
                      }}>
                        {t.name}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: featured ? 'var(--gold)' : 'var(--ink-mute)',
                      }}>
                        {t.designation}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 36 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === current ? 24 : 8, height: 8,
                borderRadius: 4,
                background: i === current ? 'var(--royal)' : 'var(--beige-line)',
                border: 'none', padding: 0, cursor: 'pointer',
                transition: 'width 0.3s ease, background 0.3s ease',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
