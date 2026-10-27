import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import Secao from './Secao.jsx'
import { experiencias } from '../data/perfil.js'

const EASE = [0.22, 1, 0.36, 1]

export default function Experiencia() {
  const ref = useRef(null)

  // A linha da timeline "se desenha" conforme a pessoa rola a página.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 60%'],
  })
  const progresso = useSpring(scrollYProgress, { stiffness: 90, damping: 22 })

  return (
    <Secao id="experiencia" numero="03" titulo="Experiência">
      <div ref={ref} className="relative pl-6">
        <span className="absolute bottom-0 left-0 top-0 w-px bg-line" />
        <motion.span
          style={{ scaleY: progresso }}
          className="absolute bottom-0 left-0 top-0 w-px origin-top bg-gradient-to-b from-accent to-accent2"
        />

        <ol className="space-y-10">
          {experiencias.map((e, idx) => (
            <motion.li
              key={e.cargo}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
              className="relative"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 400, damping: 14, delay: 0.2 }}
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg shadow-[0_0_12px] shadow-accent/60"
              />
              <p className="font-mono text-xs text-accent2">{e.periodo}</p>
              <h3 className="mt-1 text-lg font-semibold">{e.cargo}</h3>
              <p className="text-sm text-muted">{e.local}</p>
              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 + idx * 0.05 } },
                }}
                className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted marker:text-accent"
              >
                {e.itens.map((i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -14 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
                    }}
                  >
                    {i}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </Secao>
  )
}
