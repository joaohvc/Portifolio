import { motion } from 'motion/react'
import Secao from './Secao.jsx'
import { lista, item } from './fx/Reveal.jsx'
import { hardSkills, softSkills } from '../data/perfil.js'

const EASE = [0.22, 1, 0.36, 1]

// Largura da barrinha de cada nível (só efeito visual).
const barra = {
  Experiência: 72,
  Intermediário: 65,
  'Iniciante/Intermediário': 50,
  Conhecimento: 45,
  Iniciante: 32,
}

export default function Habilidades() {
  return (
    <Secao id="habilidades" numero="02" titulo="Habilidades">
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent2">
            Hard skills
          </h3>
          <motion.ul
            variants={lista}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {hardSkills.map((s) => (
              <motion.li
                key={s.nome}
                variants={item}
                whileHover={{ y: -4, borderColor: 'rgba(124,92,255,0.7)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-xl border border-line bg-surface px-4 py-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium">{s.nome}</span>
                  <span className="shrink-0 rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                    {s.nivel}
                  </span>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${barra[s.nivel] ?? 40}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                  />
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent2">
            Soft skills
          </h3>
          <motion.ul
            variants={lista}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-wrap gap-2"
          >
            {softSkills.map((s) => (
              <motion.li
                key={s}
                variants={{
                  hidden: { opacity: 0, scale: 0.6 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 260, damping: 14 },
                  },
                }}
                whileHover={{ y: -3, scale: 1.06 }}
                className="cursor-default rounded-full border border-line px-4 py-2 text-sm hover:border-accent2"
              >
                {s}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Secao>
  )
}
