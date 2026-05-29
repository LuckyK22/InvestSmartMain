import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShieldCheck, ChevronDown, ExternalLink, AlertTriangle, Info, Smartphone, FileText
} from 'lucide-react'
import { regulatoryInfo } from '../../constants/regulatory'

function ExpandableCard({ title, icon: Icon, accentColor, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
      open ? 'border-gold-500/30 bg-gold-500/5 shadow-sm' : 'border-beige-200 bg-beige-50 hover:border-beige-300 hover:shadow-sm'
    }`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <div className="w-9 h-9 rounded-xl bg-beige-100 flex items-center justify-center shrink-0">
          <Icon size={17} className={open ? 'text-gold-600' : 'text-slate-400'} />
        </div>
        <span className={`flex-1 font-semibold text-sm transition-colors ${open ? 'text-slate-900' : 'text-slate-600'}`}>
          {title}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} className={open ? 'text-gold-600' : 'text-slate-400'} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 pt-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function RegulatorySection() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-startup-grid opacity-60" />
      <div className="absolute bottom-0 right-0 w-100 h-100 rounded-full orb-2 blur-3xl pointer-events-none opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-300 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 xl:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 mb-5">
            <ShieldCheck size={13} className="text-electric-500" />
            <span className="text-xs font-medium text-electric-600 tracking-wider uppercase">Regulatory Info</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Regulatory &{' '}
            <span className="gradient-text">Investor Protection</span>
          </h2>
          <p className="text-slate-500 font-light max-w-md mx-auto">
            Important disclosures, SEBI registration details, and investor rights information.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {/* SEBI Registration */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <ExpandableCard
              title="SEBI Registration & Membership Details"
              icon={ShieldCheck}
              accentColor="gold-500"
              defaultOpen
            >
              <div className="space-y-3">
                {regulatoryInfo.companies.map(co => (
                  <div key={co.name} className="bg-beige-100 border border-beige-200 rounded-xl p-4">
                    <p className="font-semibold text-slate-900 mb-3 text-sm">{co.name}</p>
                    <div className="grid sm:grid-cols-2 gap-2 mb-3">
                      {co.sebi && (
                        <div className="text-xs">
                          <span className="text-slate-500">SEBI Reg No: </span>
                          <span className="font-semibold text-gold-700">{co.sebi}</span>
                        </div>
                      )}
                      {co.cin && (
                        <div className="text-xs">
                          <span className="text-slate-500">CIN: </span>
                          <span className="font-semibold text-slate-700">{co.cin}</span>
                        </div>
                      )}
                    </div>
                    <ul className="space-y-1">
                      {co.memberships.map(m => (
                        <li key={m} className="text-xs text-slate-500 flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ExpandableCard>
          </motion.div>

          {/* Investor Notices */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.07 }}
          >
            <ExpandableCard title="Attention Investors" icon={AlertTriangle} accentColor="amber-500">
              <ul className="space-y-3">
                {regulatoryInfo.investorNotices.map((notice, i) => (
                  <li key={i} className="text-xs text-slate-500 leading-relaxed flex gap-2">
                    <span className="text-gold-600 font-bold shrink-0 mt-0.5">{i + 1}.</span>
                    {notice}
                  </li>
                ))}
                <li>
                  <a
                    href={regulatoryInfo.attentionPage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-electric-600 hover:text-electric-700 font-semibold mt-1"
                  >
                    Read full Attention Investors page
                    <ExternalLink size={11} />
                  </a>
                </li>
              </ul>
            </ExpandableCard>
          </motion.div>

          {/* SCORES */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <ExpandableCard title="SCORES Complaint Procedure" icon={Info} accentColor="neon-500">
              <p className="text-xs text-slate-500 mb-3 leading-relaxed">{regulatoryInfo.scoresInfo.text}</p>
              <ol className="space-y-2 mb-4">
                {regulatoryInfo.scoresInfo.steps.map((step, i) => (
                  <li key={i} className="text-xs text-slate-500 flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-neon-500/15 text-neon-500 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="flex flex-wrap gap-3">
                <a
                  href={regulatoryInfo.scoresInfo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-electric-600 hover:text-electric-700 font-semibold"
                >
                  Visit SCORES 2.0 <ExternalLink size={11} />
                </a>
                <a
                  href={regulatoryInfo.odrPlatform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-electric-600 hover:text-electric-700 font-semibold"
                >
                  Smart ODR <ExternalLink size={11} />
                </a>
              </div>
            </ExpandableCard>
          </motion.div>

          {/* KYC */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.17 }}
          >
            <ExpandableCard title="KYC Information" icon={FileText} accentColor="violet-500">
              <p className="text-xs text-slate-500 leading-relaxed">
                KYC (Know Your Customer) is a <span className="text-slate-900 font-semibold">one-time process</span> for dealing in securities markets. Once completed through a SEBI registered intermediary, it need not be repeated with another intermediary.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed mt-3">
                Documents required: PAN Card, Address Proof (Aadhaar/Passport), Bank Account Proof, Passport-size photograph, and Income Proof.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed mt-3">
                For IPO applications, no cheques are needed — mention your bank account number and authorize ASBA. Refunds are automatically credited.
              </p>
            </ExpandableCard>
          </motion.div>

          {/* CDSL App */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            <ExpandableCard title="CDSL MYEASI Mobile App" icon={Smartphone} accentColor="sky-500">
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                {regulatoryInfo.cdslApp.text}
              </p>
              <ul className="space-y-1.5 mb-4">
                {[
                  'View holdings & transactions',
                  'e-CAS (Consolidated Account Statement)',
                  'e-Voting for securities',
                  'Demat account alerts',
                  'Mobile-based DIS issuance',
                ].map(f => (
                  <li key={f} className="text-xs text-slate-500 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={regulatoryInfo.cdslApp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-electric-600 hover:text-electric-700 font-semibold"
              >
                Download App Guide (PDF) <ExternalLink size={11} />
              </a>
            </ExpandableCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
