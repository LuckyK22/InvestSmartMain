import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import logo1 from '../../assets/logo/logo1.png'
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
        color: 'var(--ink-soft)',
        padding: scrolled ? '6px 12px' : '8px 14px',
        fontSize: scrolled ? '16px' : '18px',
        fontWeight: 600,
        borderRadius: '4px',
        letterSpacing: '0.01em',
        transition: 'background .18s ease, color .18s ease, padding .25s ease, font-size .25s ease',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
    }

    if (!item.dropdown) {
        return (
            <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                style={linkStyle}
                onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--royal)'
                    e.currentTarget.style.background = 'oklch(76% 0.115 82 / 0.28)'
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--ink-soft)'
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
                    e.currentTarget.style.color = 'var(--royal)'
                    e.currentTarget.style.background = 'oklch(76% 0.115 82 / 0.28)'
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--ink-soft)'
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

    useEffect(() => {
        let raf = 0
        const handler = () => {
            if (raf) return
            raf = requestAnimationFrame(() => {
                raf = 0
                setScrolled(window.scrollY > 24)
            })
        }
        window.addEventListener('scroll', handler, { passive: true })
        handler()
        return () => window.removeEventListener('scroll', handler)
    }, [])

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [mobileOpen])

    const headerHeight = scrolled ? '54px' : '170px'
    const navHeight = scrolled ? '42px' : '52px'

    return (
        <>
            {/* Two-bar sticky header */}
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
                        className="mx-auto px-8 flex items-center justify-between gap-6 relative"
                        style={{ height: headerHeight, transition: 'height .3s cubic-bezier(.2,.7,.2,1)' }}
                    >
                        {/* Centered tagline — fades out on scroll */}
                        <div
                            className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none hidden lg:flex flex-col items-center"
                            style={{
                                opacity: scrolled ? 0 : 1,
                                transition: 'opacity .35s ease',
                                whiteSpace: 'nowrap',
                                textAlign: 'center',
                            }}
                        >
                            {/* Decorative glow line + chart icon */}
                            <div className="flex items-center mb-1" style={{ width: '320px', gap: '8px' }}>
                                {/* Left glow line */}
                                <div
                                    style={{
                                        flex: 1,
                                        height: '1.5px',
                                        background: 'linear-gradient(to right, transparent 0%, oklch(82% 0.13 78 / 0.3) 30%, oklch(88% 0.15 78 / 0.9) 100%)',
                                        borderRadius: '2px',
                                    }}
                                />
                                {/* Chart icon */}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                                    <rect x="2" y="14" width="4" height="8" rx="1" fill="oklch(88% 0.15 78)" />
                                    <rect x="10" y="9" width="4" height="13" rx="1" fill="oklch(88% 0.15 78)" />
                                    <rect x="18" y="4" width="4" height="18" rx="1" fill="oklch(88% 0.15 78)" />
                                    <polyline points="3,13 11,7 19,2" stroke="oklch(88% 0.15 78)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    <circle cx="19" cy="2" r="1.5" fill="oklch(88% 0.15 78)" />
                                </svg>
                                {/* Right glow line */}
                                <div
                                    style={{
                                        flex: 1,
                                        height: '1.5px',
                                        background: 'linear-gradient(to left, transparent 0%, oklch(82% 0.13 78 / 0.3) 30%, oklch(88% 0.15 78 / 0.9) 100%)',
                                        borderRadius: '2px',
                                    }}
                                />
                            </div>
                            {/* SMART INVESTING */}
                            <span
                                style={{
                                    fontFamily: '"Playfair Display", Georgia, serif',
                                    fontStyle: 'normal',
                                    fontSize: '30px',
                                    letterSpacing: '0.08em',
                                    color: 'var(--paper)',
                                    fontWeight: 800,
                                    lineHeight: 1.1,
                                    display: 'block',
                                    textTransform: 'uppercase',
                                }}
                            >
                                SMART INVESTING
                            </span>
                            {/* MADE EASY */}
                            <span
                                style={{
                                    fontFamily: '"Playfair Display", Georgia, serif',
                                    fontStyle: 'italic',
                                    fontSize: '30px',
                                    letterSpacing: '0.06em',
                                    color: 'oklch(82% 0.13 78)',
                                    textShadow: '0 0 18px oklch(76% 0.115 82 / 0.5)',
                                    fontWeight: 800,
                                    lineHeight: 1.1,
                                    // display: 'block',
                                    textTransform: 'uppercase',
                                    // marginLeft: "120px"
                                }}
                            >
                                MADE EASY
                            </span>

                        </div>

                        {/* Logo */}
                        <a href="/" className="flex items-center gap-2.5 shrink-0">
                            <img
                                src={logo1}
                                alt="InvestSmart"
                                className="w-auto object-contain"
                                style={{
                                    height: scrolled ? '30px' : '42px',
                                    transition: 'height .3s ease',
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                                    fontWeight: 700,
                                    fontSize: scrolled ? '18px' : '30px',
                                    lineHeight: 1,
                                    letterSpacing: '-0.015em',
                                    color: 'var(--paper)',
                                    transition: 'font-size .3s ease',
                                }}
                            >
                                Invest<span style={{ color: 'var(--gold-deep)' }}>Smart</span>
                            </span>
                        </a>

                        {/* Header right — language + help */}
                        <div
                            className={`hidden lg:flex items-center gap-4 text-[13px] whitespace-nowrap ${scrolled ? 'self-center' : 'self-start pt-3'}`}
                            style={{ color: 'var(--paper)', transition: 'font-size .25s ease, gap .3s ease, padding .3s ease', fontWeight: 500 }}
                        >
                            <span className="flex gap-3.5">
                                <a
                                    href="#"
                                    style={{ opacity: 0.75 }}
                                // onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--royal)' }}
                                // onMouseLeave={e => { e.currentTarget.style.opacity = '0.75'; e.currentTarget.style.color = 'var(--ink-soft)' }}
                                >EN</a>
                                <a
                                    href="#"
                                    style={{ opacity: 0.75 }}
                                // onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--royal)' }}
                                // onMouseLeave={e => { e.currentTarget.style.opacity = '0.75'; e.currentTarget.style.color = 'var(--ink-soft)' }}
                                >हिंदी</a>
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
                            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                            style={{ background: 'oklch(0% 0 0 / .10)', color: 'var(--ink)' }}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </header>

                {/* ── Light nav strip ── */}
                <nav
                    className="hidden lg:block"
                    style={{
                        background: 'var(--paper)',
                        borderBottom: '1px solid var(--beige-line)',
                        transition: 'background .3s ease',
                    }}
                >
                    <div
                        className="max-w-[1280px] mx-auto px-8 flex items-center justify-center"
                        style={{ height: navHeight, transition: 'height .3s cubic-bezier(.2,.7,.2,1)' }}
                    >
                        <div className="flex items-center gap-0.5 flex-wrap justify-center" style={{ fontSize: '15px' }}>
                            {navLinks.map(item => (
                                <NavItem key={item.label} item={item} scrolled={scrolled} />
                            ))}
                        </div>
                    </div>
                </nav>
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
                            style={{ background: 'oklch(22% 0.110 265 / .45)' }}
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute right-0 top-0 bottom-0 w-72 flex flex-col overflow-y-auto"
                            style={{ background: 'var(--royal-deep)', borderLeft: '1px solid oklch(100% 0 0 / .1)' }}
                        >
                            <div className="flex items-center justify-between p-6 pb-4">
                                <span style={{ color: 'var(--paper)', fontWeight: 700 }}>Menu</span>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    style={{ color: 'oklch(80% 0.020 78)' }}
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-1 px-4 pb-4 flex flex-col gap-0.5">
                                {navLinks.map(item => (
                                    <div key={item.label}>
                                        {item.dropdown ? (
                                            <>
                                                <button
                                                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                                                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-left"
                                                    style={{
                                                        color: 'oklch(86% 0.020 78)',
                                                        background: mobileExpanded === item.label ? 'oklch(100% 0 0 / .08)' : '',
                                                        transition: 'background .18s ease',
                                                    }}
                                                >
                                                    {item.label}
                                                    <ChevronDown
                                                        size={14}
                                                        style={{
                                                            transform: mobileExpanded === item.label ? 'rotate(180deg)' : '',
                                                            transition: 'transform .2s ease',
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
                                                            <div className="pl-4 pb-2 flex flex-col gap-0.5">
                                                                {item.dropdown.map(sub => (
                                                                    <a
                                                                        key={sub.label}
                                                                        href={sub.href}
                                                                        target={sub.external ? '_blank' : undefined}
                                                                        rel={sub.external ? 'noopener noreferrer' : undefined}
                                                                        onClick={() => setMobileOpen(false)}
                                                                        className="px-4 py-2.5 rounded-lg text-sm"
                                                                        style={{ color: 'oklch(76% 0.020 78)' }}
                                                                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
                                                                        onMouseLeave={e => { e.currentTarget.style.color = 'oklch(76% 0.020 78)' }}
                                                                    >
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
                                                className="block px-4 py-3 rounded-xl text-sm font-semibold"
                                                style={{ color: 'oklch(86% 0.020 78)', transition: 'background .18s ease, color .18s ease' }}
                                                onMouseEnter={e => { e.currentTarget.style.background = 'oklch(100% 0 0 / .08)'; e.currentTarget.style.color = 'var(--gold)' }}
                                                onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'oklch(86% 0.020 78)' }}
                                            >
                                                {item.label}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 pt-4" style={{ borderTop: '1px solid oklch(100% 0 0 / .1)' }}>
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
