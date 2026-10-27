import { motion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1]

export default function Secao({ id, numero, titulo, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10 flex items-center gap-4 overflow-hidden">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-accent"
        >
          {numero}
        </motion.span>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            {titulo}
          </motion.h2>
        </div>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="h-px flex-1 origin-left bg-line"
        />
      </div>
      {children}
    </section>
  )
}
