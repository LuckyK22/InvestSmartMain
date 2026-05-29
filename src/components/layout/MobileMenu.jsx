import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown, ExternalLink, Phone, ArrowRight } from 'lucide-react'
import { navLinks, utilityLinks } from '../../constants/navigation'
import { mobileMenuVariant, overlayVariant } from '../../animations/variants'
import logo1 from '../../assets/logo/logo1.png'

function MobileNavItem({ item }) {
  const [open, setOpen] = useState(false)

  if (item.dropdown) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-3.5 px-2 text-white font-medium border-b border-white/10 hover:text-blue-300 transition-colors"
        >
          <span>{item.label}</span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={16} />
          </motion.span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="pl-4 py-1 space-y-0.5">
                {item.dropdown.map(sub => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    target={sub.external ? '_blank' : undefined}
                    rel={sub.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 py-2.5 px-2 text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                    {sub.label}
                    {sub.external && <ExternalLink size={11} className="ml-auto opacity-50" />}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <a
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-2 py-3.5 px-2 text-white font-medium border-b border-white/10 hover:text-blue-300 transition-colors"
    >
      {item.label}
      {item.external && <ExternalLink size={13} className="opacity-50" />}
    </a>
  )
}

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-slate-900/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            variants={mobileMenuVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-gradient-to-b from-slate-900 to-blue-950 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <div className="flex items-center gap-2.5 min-w-0">
                <img
                  src={logo1}
                  alt="InvestSmart"
                  className="h-9 object-contain shrink-0"
                />
                <span className="text-white font-extrabold text-base tracking-tight leading-none truncate">
                  Invest<span className="gradient-text-gold">Smart</span>
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Utility */}
            <div className="flex flex-wrap gap-2 p-4 border-b border-white/10">
              {utilityLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-1.5 text-xs text-blue-300 hover:text-white transition-colors"
                >
                  {link.icon === 'phone' ? <Phone size={11} /> : null}
                  {link.label}
                </a>
              ))}
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto px-4 py-2">
              {navLinks.map(item => (
                <MobileNavItem key={item.label} item={item} />
              ))}
            </div>

            {/* CTA */}
            <div className="p-4 border-t border-white/10">
              <a
                href="https://myinvestsmart.in/accountopening.php"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl btn-gradient text-white font-bold text-sm"
              >
                Open Account
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
