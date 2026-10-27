import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from 'motion/react'

// Card com inclinação 3D que segue o mouse e brilho (glare) que acompanha o cursor.
export default function TiltCard({ children, className = '', intensidade = 8 }) {
  const ref = useRef(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const mola = { stiffness: 220, damping: 20, mass: 0.6 }
  const rotateX = useSpring(
    useTransform(py, [0, 1], [intensidade, -intensidade]),
    mola,
  )
  const rotateY = useSpring(
    useTransform(px, [0, 1], [-intensidade, intensidade]),
    mola,
  )

  const gx = useTransform(px, (v) => `${v * 100}%`)
  const gy = useTransform(py, (v) => `${v * 100}%`)
  const brilho = useMotionTemplate`radial-gradient(360px circle at ${gx} ${gy}, rgba(124,92,255,0.22), transparent 55%)`

  function mover(e) {
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }

  function sair() {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={mover}
      onPointerLeave={sair}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`group relative ${className}`}
    >
      <motion.div
        aria-hidden
        style={{ background: brilho }}
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </motion.div>
  )
}
