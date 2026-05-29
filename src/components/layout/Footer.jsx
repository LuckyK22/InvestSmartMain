import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowUpRight, ExternalLink } from 'lucide-react'
import { companyInfo, regulatoryLinks, quickLinks, policyLinks } from '../../constants/footer.js'
import { regulatoryInfo } from '../../constants/regulatory.js'
import logo1 from '../../assets/logo/logo1.png'

const LINK_COLS = [
  { heading: 'Quick Links', links: quickLinks.slice(0, 5) },
  { heading: 'Policies', links: policyLinks.slice(0, 5) },
]

const REG_LINKS = regulatoryLinks.slice(0, 8)

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-[15px] font-medium"
    >
      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 relative overflow-hidden" style={{ background: 'var(--royal-deep)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 left-1/3 w-125 h-75 rounded-full bg-blue-400/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/4 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 xl:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pt-16 pb-10">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="xl:col-span-1"
          >
            <div className="mb-5">
              <div className="flex items-center gap-3">
                <img src={logo1} alt="InvestSmart" className="h-12 w-auto object-contain shrink-0" />
                <span className="text-2xl font-bold leading-none">
                  <span className="text-white font-extrabold">Invest</span>
                  <span style={{ color: 'var(--gold)' }}>Smart</span>
                </span>
              </div>
              <p className="text-white/50 text-[10px] mt-1 uppercase tracking-[0.22em] font-semibold">
                Stock Brokers Pvt. Ltd.
              </p>
            </div>

            <p className="text-white/70 text-[17px] leading-relaxed mb-6 font-medium">
              {companyInfo.tagline}
            </p>

            <div className="space-y-3">
              <div className="flex gap-3 text-sm text-white/70">
                <MapPin size={14} className="text-blue-200 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{companyInfo.address}</span>
              </div>
              <div className="flex gap-3 text-sm text-white/70">
                <Phone size={14} className="text-blue-200 shrink-0 mt-0.5" />
                <span>{companyInfo.phones.join(' | ')}</span>
              </div>
              {companyInfo.emails.map(email => (
                <div key={email} className="flex gap-3 text-sm text-white/70">
                  <Mail size={14} className="text-blue-200 shrink-0 mt-0.5" />
                  <a href={`mailto:${email}`} className="hover:text-white transition-colors break-all">
                    {email}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {LINK_COLS.map((col, ci) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (ci + 1) * 0.07 }}
            >
              <h3 className="text-white/60 font-bold text-xs uppercase tracking-[0.2em] mb-5">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Regulatory portals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.21 }}
          >
            <h3 className="text-gold-300 font-bold text-xs uppercase tracking-[0.2em] mb-5">
              Regulatory Bodies
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {REG_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-white/8 border border-white/20 text-white/80 hover:text-white hover:bg-white/15 hover:border-white/40 transition-all text-xs font-semibold"
                >
                  <ExternalLink size={9} className="opacity-60" />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Registration bar */}
        <div className="border-t border-white/10 py-5">
          <div className="flex flex-wrap gap-3">
            {regulatoryInfo.companies.map(co => (
              <div key={co.name} className="text-xs text-white/60">
                <span className="text-white/90 font-semibold">{co.name}</span>
                {co.sebi && <span className="ml-1">| SEBI {co.sebi}</span>}
                {co.cin && <span className="ml-1">| CIN: {co.cin}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 py-6 space-y-3">
          {regulatoryInfo.footerDisclosure.split('\n\n').map((para, i) => (
            <p key={i} className="text-xs text-white/55 leading-relaxed">
              {para.trim()}
            </p>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/70">
            Copyright {new Date().getFullYear()} InvestSmart Stock Brokers Pvt. Limited. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Investments are subject to market risk. Please read all documents carefully.
          </p>
        </div>
      </div>
    </footer>
  )
}


