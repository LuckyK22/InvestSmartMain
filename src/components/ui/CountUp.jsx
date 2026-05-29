import { useRef, useState, useEffect } from 'react'
import { useCountUp } from '../../hooks/useCountUp'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function CountUp({ target, prefix = '', suffix = '', duration = 2200 }) {
  const { ref, isVisible } = useScrollAnimation(0.5)
  const count = useCountUp(target, duration, isVisible)

  const display = target >= 10000
    ? count.toLocaleString('en-IN')
    : count

  return (
    <span ref={ref} aria-label={`${prefix}${target}${suffix}`}>
      {prefix}{display}{suffix}
    </span>
  )
}
