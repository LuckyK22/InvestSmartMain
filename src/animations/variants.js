export const EASING = [0.22, 1, 0.36, 1]

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: EASING },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: EASING },
  },
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.65, ease: EASING },
  },
}

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.65, ease: EASING },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.55, ease: EASING },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
}

export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

export const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

export const floatVariant = {
  initial: { y: 0 },
  animate: {
    y: [0, -14, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
}

export const floatVariant2 = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 },
  },
}

export const floatVariant3 = {
  initial: { y: 0 },
  animate: {
    y: [0, -12, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.6 },
  },
}

export const cardHover = {
  rest: { y: 0, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' },
  hover: {
    y: -6,
    boxShadow: '0 20px 40px rgba(37,99,235,0.15)',
    transition: { duration: 0.3, ease: EASING },
  },
}

export const buttonTap = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
}

export const dropdownVariant = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.18, ease: 'easeOut' },
  },
  exit: {
    opacity: 0, y: -8, scale: 0.97,
    transition: { duration: 0.13, ease: 'easeIn' },
  },
}

export const mobileMenuVariant = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: 0.35, ease: EASING },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
  },
}

export const accordionContent = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto', opacity: 1,
    transition: { duration: 0.3, ease: EASING },
  },
  exit: {
    height: 0, opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
}

export const overlayVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}
