import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../animations/variants'

export default function SectionHeader({ tag, title, highlight, subtitle, center = true, light = false }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={center ? 'text-center' : ''}
    >
      {tag && (
        <motion.div variants={fadeInUp} className="mb-4">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${
            light
              ? 'bg-white/15 text-blue-200 border border-white/20'
              : 'bg-blue-50 text-blue-600 border border-blue-100'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-blue-300' : 'bg-blue-500'}`} />
            {tag}
          </span>
        </motion.div>
      )}
      <motion.h2
        variants={fadeInUp}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4 ${
          light ? 'text-white' : 'text-slate-900'
        }`}
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {title}{' '}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`text-lg md:text-xl max-w-2xl ${center ? 'mx-auto' : ''} leading-relaxed ${
            light ? 'text-blue-100/80' : 'text-slate-500'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
