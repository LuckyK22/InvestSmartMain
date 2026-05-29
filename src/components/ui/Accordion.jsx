import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
      isOpen ? 'border-blue-200 bg-blue-50/40 shadow-sm' : 'border-slate-200 bg-white hover:border-blue-200'
    }`}>
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-base leading-snug transition-colors ${
          isOpen ? 'text-blue-700' : 'text-slate-800'
        }`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {item.question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
          isOpen ? 'bg-blue-600 text-white rotate-0' : 'bg-slate-100 text-slate-500'
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-5 text-slate-600 leading-relaxed text-sm md:text-base">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Accordion({ items, allowMultiple = false }) {
  const [openIds, setOpenIds] = useState([])

  const toggle = (id) => {
    if (allowMultiple) {
      setOpenIds(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      )
    } else {
      setOpenIds(prev => prev.includes(id) ? [] : [id])
    }
  }

  return (
    <div className="space-y-3">
      {items.map(item => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openIds.includes(item.id)}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  )
}
