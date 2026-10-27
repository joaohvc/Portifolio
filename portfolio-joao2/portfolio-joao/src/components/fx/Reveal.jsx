import { motion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1]

// Revela o conteúdo ao entrar na tela (fade + deslocamento + leve blur).
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  className = '',
  as = 'div',
}) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, x, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}

// Variantes para listas com stagger: use <motion.ul variants={lista}> + <motion.li variants={item}>
export const lista = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export const item = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
}
