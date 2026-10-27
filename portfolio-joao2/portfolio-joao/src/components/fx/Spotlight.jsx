import { useEffect } from 'react'
import { motion, useMotionValue, useMotionTemplate, useSpring } from 'motion/react'

// Luz que segue o cursor por toda a página (fica atrás do conteúdo).
export default function Spotlight() {
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const sx = useSpring(x, { stiffness: 120, damping: 22, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 120, damping: 22, mass: 0.5 })
  const fundo = useMotionTemplate`radial-gradient(420px circle at ${sx}px ${sy}px, rgba(124,92,255,0.10), transparent 70%)`

  useEffect(() => {
    const mover = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', mover)
    return () => window.removeEventListener('pointermove', mover)
  }, [x, y])

  return (
    <motion.div
      aria-hidden
      style={{ background: fundo }}
      className="pointer-events-none fixed inset-0 z-0"
    />
  )
}
