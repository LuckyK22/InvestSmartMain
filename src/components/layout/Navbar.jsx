import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import logo1 from '../../assets/logo/logo7.png'
import { navLinks } from '../../constants/navigation'

function DropdownMenu({ items, group }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -4, scale: 0.98 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 z-50 min-w-[280px] rounded-lg p-2.5"
      style={{
        background: 'var(--paper)',
        border: '1px solid var(--beige-line)',
        boxShadow: '0 16px 40px -22px oklch(22% 0.110 265 / .35)',
      }}
    >
      {/* Popover caret */}
      <span
        className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45"
        style={{
          background: 'var(--paper)',
          borderTop: '1px solid var(--beige-line)',
          borderLeft: '1px solid var(--beige-line)',
        }}
      />
      {group && (
        <p
          className="px-3 pt-1.5 pb-1 text-[10.5px] tracking-[0.16em] uppercase"
          style={{ color: 'var(--ink-mute)', fontFamily: '"JetBrains Mono", monospace' }}
        >
          {group}
        </p>
      )}
      {items.map(link => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          className="dd-item flex items-center justify-between gap-4 px-3 py-2.5 rounded text-[13.5px]"
          style={{ color: 'var(--ink-soft)' }}
        >
          {link.label}
          <span className="dd-arrow text-[12px]" style={{ color: 'var(--gold-deep)', opacity: 0 }}>
            →
          </span>
        </a>
      ))}
    </motion.div>
  )
}

function NavItem({ item, scrolled }) {
  const [open, setOpen] = useState(false)

  const linkStyle = {
    color: 'oklch(92% 0.010 78)',
    padding: scrolled ? '4px 8px' : '5px 9px',
    fontSize: scrolled ? '14px' : '15px',
    fontWeight: 600,
    borderRadius: '4px',
    letterSpacing: '0.01em',
    transition: 'background .18s ease, color .18s ease, padding .25s ease, font-size .25s ease',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    whiteSpace: 'nowrap',
  }

  if (!item.dropdown) {
    return (
      <a
        href={item.href}
        target={item.external ? '_blank' : undefined}
        rel={item.external ? 'noopener noreferrer' : undefined}
        style={linkStyle}
        onMouseEnter={e => {
          e.currentTarget.style.color = 'var(--gold-deep)'
          e.currentTarget.style.background = 'oklch(100% 0 0 / 0.10)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = 'oklch(92% 0.010 78)'
          e.currentTarget.style.background = ''
        }}
      >
        {item.label}
      </a>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        style={linkStyle}
        onMouseEnter={e => {
          e.currentTarget.style.color = 'var(--gold-deep)'
          e.currentTarget.style.background = 'oklch(100% 0 0 / 0.10)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = 'oklch(92% 0.010 78)'
          e.currentTarget.style.background = ''
        }}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <span
          style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRight: '1.5px solid currentColor',
            borderBottom: '1.5px solid currentColor',
            transform: open ? 'translateY(1px) rotate(225deg)' : 'translateY(-2px) rotate(45deg)',
            opacity: 0.6,
            transition: 'transform .2s ease',
          }}
        />
      </button>
      <AnimatePresence>
        {open && <DropdownMenu items={item.dropdown} group={item.group} />}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false
  )

  useEffect(() => {
    let raf = 0
    const handler = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        setScrolled(window.scrollY > 40)
      })
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const headerHeight = scrolled ? '60px' : isMobile ? '68px' : '100px'

  return (
    <>
      {/* Sticky header */}
      <div
        className="sticky top-0 z-50"
        style={{
          boxShadow: scrolled
            ? '0 6px 24px -16px oklch(22% 0.110 265 / .55)'
            : 'none',
          transition: 'box-shadow .35s ease',
        }}
      >
        {/* ── Royal blue header bar ── */}
        <header
          style={{
            background: 'var(--royal-deep)',
            borderBottom: '1px solid oklch(100% 0 0 / .08)',
            transition: 'background .3s ease',
          }}
        >
          <div
            className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-4 relative"
            style={{ height: headerHeight, transition: 'height .3s cubic-bezier(.2,.7,.2,1)' }}
          >

            {/* Logo */}
            <a href="/" className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <img
                src={logo1}
                alt="InvestSmart"
                className="w-auto object-contain"
                style={{
                  height: scrolled ? '26px' : isMobile ? '36px' : '60px',
                  transition: 'height .3s ease',
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: scrolled ? '15px' : isMobile ? '17px' : '18px',
                    lineHeight: 1,
                    letterSpacing: '-0.015em',
                    color: 'var(--paper)',
                    transition: 'font-size .3s ease',
                    borderBottom: '1px solid var(--gold)',
                  }}
                >
                  INVEST<span style={{ color: 'var(--gold-deep)' }}> SMART</span>
                </span>
                <span
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: scrolled ? '7px' : isMobile ? '8px' : '7px',
                    letterSpacing: scrolled ? '3px' : isMobile ? '3.5px' : '5.2px',
                    color: 'var(--paper)',
                    lineHeight: 1,
                    textTransform: 'uppercase',
                    marginTop: scrolled ? '2px' : isMobile ? '4px' : '8px',
                    marginBottom: scrolled ? '0px' : '2px',
                    transition: 'font-size .3s ease, letter-spacing .3s ease, margin .3s ease',
                  }}
                >
                  STOCK BROKERS
                </span>
              </div>
            </a>

            {/* Nav links — desktop */}
            <div
              className="hidden lg:flex items-center gap-0.5 flex-1 justify-center"
              style={{
                transform: scrolled ? 'translateY(0px)' : 'translateY(20px)',
                transition: 'transform .3s cubic-bezier(.2,.7,.2,1)',
              }}
            >
              {navLinks.map(item => (
                <NavItem key={item.label} item={item} scrolled={scrolled} />
              ))}
            </div>

            {/* Header right — language + help */}
            <div
              className="hidden lg:flex items-center gap-4 text-[13px] whitespace-nowrap shrink-0"
              style={{
                color: 'var(--paper)',
                fontWeight: 500,
                transform: scrolled ? 'translateY(0px)' : 'translateY(-20px)',
                transition: 'transform .3s cubic-bezier(.2,.7,.2,1)',
              }}
            >
              <span className="flex gap-3.5">
                <a href="#" style={{ opacity: 0.75 }}>EN</a>
                <a href="#" style={{ opacity: 0.75 }}>हिंदी</a>
              </span>
              <span
                className="shrink-0"
                style={{ width: '1px', height: '16px', background: 'oklch(0% 0 0 / .18)', display: 'inline-block' }}
              />
              <a
                href="https://myinvestsmart.in/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                style={{ transition: 'color .18s ease' }}
              >
                Help &amp; Support
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              style={{ background: 'oklch(100% 0 0 / .12)', color: 'var(--paper)' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>
      </div>

      {/* ── Mobile slide-in menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 backdrop-blur-sm"
              style={{ background: 'oklch(22% 0.110 265 / .50)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full xs:w-80 sm:w-80 flex flex-col overflow-y-auto"
              style={{
                maxWidth: '320px',
                background: 'var(--royal-deep)',
                borderLeft: '1px solid oklch(100% 0 0 / .1)',
              }}
            >
              {/* Mobile menu header */}
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid oklch(100% 0 0 / .1)' }}>
                <a href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <img src={logo1} alt="InvestSmart" className="w-auto object-contain" style={{ height: '30px' }} />
                  <span
                    style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: 'var(--paper)',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    INVEST<span style={{ color: 'var(--gold-deep)' }}> SMART</span>
                  </span>
                </a>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'oklch(100% 0 0 / .10)', color: 'var(--paper)' }}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav items */}
              <div className="flex-1 px-3 py-3 flex flex-col gap-0.5 overflow-y-auto">
                {navLinks.map(item => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-semibold text-left"
                          style={{
                            color: 'oklch(90% 0.015 78)',
                            background: mobileExpanded === item.label ? 'oklch(100% 0 0 / .08)' : '',
                            transition: 'background .18s ease',
                          }}
                        >
                          {item.label}
                          <ChevronDown
                            size={15}
                            style={{
                              flexShrink: 0,
                              transform: mobileExpanded === item.label ? 'rotate(180deg)' : '',
                              transition: 'transform .2s ease',
                              opacity: 0.6,
                            }}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileExpanded === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-3 pb-1 flex flex-col gap-0.5">
                                {item.dropdown.map(sub => (
                                  <a
                                    key={sub.label}
                                    href={sub.href}
                                    target={sub.external ? '_blank' : undefined}
                                    rel={sub.external ? 'noopener noreferrer' : undefined}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-2 px-4 py-3 rounded-lg text-[14px]"
                                    style={{ color: 'oklch(72% 0.020 78)', transition: 'color .15s ease' }}
                                    onTouchStart={e => { e.currentTarget.style.color = 'var(--gold)' }}
                                    onTouchEnd={e => { e.currentTarget.style.color = 'oklch(72% 0.020 78)' }}
                                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
                                    onMouseLeave={e => { e.currentTarget.style.color = 'oklch(72% 0.020 78)' }}
                                  >
                                    <span
                                      style={{
                                        width: '4px', height: '4px', borderRadius: '50%',
                                        background: 'var(--gold-deep)', flexShrink: 0, opacity: 0.7,
                                      }}
                                    />
                                    {sub.label}
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3.5 rounded-xl text-[15px] font-semibold"
                        style={{ color: 'oklch(90% 0.015 78)', transition: 'background .18s ease, color .18s ease' }}
                        onTouchStart={e => { e.currentTarget.style.background = 'oklch(100% 0 0 / .08)'; e.currentTarget.style.color = 'var(--gold)' }}
                        onTouchEnd={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'oklch(90% 0.015 78)' }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'oklch(100% 0 0 / .08)'; e.currentTarget.style.color = 'var(--gold)' }}
                        onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'oklch(90% 0.015 78)' }}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile menu footer */}
              <div className="px-5 py-5 flex flex-col gap-3" style={{ borderTop: '1px solid oklch(100% 0 0 / .1)' }}>
                {/* Language + Help */}
                <div className="flex items-center justify-between text-[13px]" style={{ color: 'oklch(70% 0.015 78)' }}>
                  <div className="flex items-center gap-3">
                    <a href="#" style={{ transition: 'color .15s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--paper)' }}
                      onMouseLeave={e => { e.currentTarget.style.color = '' }}
                    >EN</a>
                    <span style={{ opacity: 0.3 }}>|</span>
                    <a href="#" style={{ transition: 'color .15s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--paper)' }}
                      onMouseLeave={e => { e.currentTarget.style.color = '' }}
                    >हिंदी</a>
                  </div>
                  <a
                    href="https://myinvestsmart.in/contact.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ transition: 'color .15s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--paper)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '' }}
                  >
                    Help &amp; Support
                  </a>
                </div>
                {/* CTA */}
                <a
                  href="https://myinvestsmart.in/accountopening.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full justify-center"
                >
                  Open Account <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
