import { motion } from 'motion/react'
import { perfil } from '../data/perfil.js'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 border-t border-line py-8 text-center text-sm text-muted"
    >
      © {new Date().getFullYear()} {perfil.nome}. Feito com React + Vite + Motion.
    </motion.footer>
  )
}
