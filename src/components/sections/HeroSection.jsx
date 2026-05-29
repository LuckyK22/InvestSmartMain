/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import logo1 from '../../assets/logo/logo1.png'
import logo2 from '../../assets/logo/logo2.png'
import logo3 from '../../assets/logo/logo3.png'
import logo4 from '../../assets/logo/logo4.png'
import logo5 from '../../assets/logo/logo5.png'
import logo6 from '../../assets/logo/logo6.png'

const reveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }
const partnerLogos = [logo1, logo2, logo3, logo4, logo5, logo6]

export default function HeroSection() {
  return (
    <div style={{ minHeight: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
      {/* ── Hero ── */}
      <section
        style={{ background: 'var(--beige)', textAlign: 'center', overflow: 'visible', flex: 1, display: 'flex', alignItems: 'center', padding: '64px 0 56px' }}
      >
        <div className="max-w-[1280px] mx-auto px-8 sm:px-5 w-full">
          <div className="flex flex-col items-center max-w-[1280px] mx-auto">

            {/* Headline */}
            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.7 }}
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(46px, 6.3vw, 78px)',
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Markets Need Access.</span>
              <span className="gradient-text" style={{ display: '', whiteSpace: 'nowrap' }}>
                Wealth Needs Judgment.
              </span>
            </motion.h1>

            {/* Lede */}
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                fontSize: '18.5px',
                lineHeight: 2,
                color: 'var(--ink-soft)',
                maxWidth: '560px',
                margin: '30px 0 0',
              }}
            >
              Investsmart brings together capital-market experience, research-led thinking
              and personalised client support across equity broking, derivatives, currency,
              MTF, demat services, mutual funds and portfolio review.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-wrap justify-center gap-3"
              style={{ marginTop: '36px' }}
            >
              {/* <a
                href="#review"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '13px 24px',
                  background: '#f8c940f2',
                  color: 'var(--royal)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '0.01em',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  transition: 'background .18s ease, transform .18s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#D07D14'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#E8901A'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Request Portfolio Review →
              </a>
              <a
                href="#review"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '13px 24px',
                  background: '#edb921f2',
                  color: '#000',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '0.01em',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  transition: 'background .18s ease, transform .18s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#D07D14'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#E8901A'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Request Portfolio Review →
              </a> */}
              <a href="https://myinvestsmart.in/contact.php" target="_blank" rel="noopener noreferrer" className="btn-gold2">
                Request Portfolio Review →
              </a>
              <a href="https://myinvestsmart.in/contact.php" target="_blank" rel="noopener noreferrer" className="btn-gold2">
                Speak to Investsmart  →
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Credentials strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          borderTop: '1px solid var(--beige-line)',
          borderBottom: '1px solid var(--beige-line)',
          background: 'var(--paper)',
        }}
      >
        <div
          className="max-w-[1280px] mx-auto px-8 sm:px-5 flex flex-wrap items-center gap-5"
          style={{ minHeight: '72px', paddingTop: '12px', paddingBottom: '12px' }}
        >
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '11px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--ink-mute)',
              whiteSpace: 'nowrap',
            }}
          >
            Regulatory standing
          </span>
          <div className="flex flex-wrap items-center" style={{ color: 'var(--ink-soft)' }}>
            {[
              {
                label: 'SEBI-registered Stock Broker',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--royal)" strokeWidth="2">
                    <path d="M12 2 4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6l-8-4z" />
                  </svg>
                ),
              },
              {
                label: 'NSE & BSE Member',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--royal)" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 10h18M10 3v18" />
                  </svg>
                ),
              },
              {
                label: 'CDSL Depository Participant',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--royal)" strokeWidth="2">
                    <path d="M3 8h18M3 12h18M3 16h18" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                ),
              },
              {
                label: 'AMFI-registered Mutual Fund Distributor',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--royal)" strokeWidth="2">
                    <path d="M12 2v20M5 9c0-3 2-5 7-5s7 2 7 5-3 4-7 4-7 1-7 4 2 5 7 5 7-2 7-5" />
                  </svg>
                ),
              },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5"
                style={{
                  padding: '0 20px',
                  fontSize: '13.5px',
                  borderLeft: i > 0 ? '1px solid var(--beige-line)' : 'none',
                }}
              >
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
