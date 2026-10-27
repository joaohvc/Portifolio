import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

// Elemento "magnético": é puxado levemente em direção ao cursor.
export default function Magnetic({ children, forca = 0.3, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 })
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 })

  function mover(e) {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * forca)
    y.set((e.clientY - (r.top + r.height / 2)) * forca)
  }

  function sair() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={mover}
      onPointerLeave={sair}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
