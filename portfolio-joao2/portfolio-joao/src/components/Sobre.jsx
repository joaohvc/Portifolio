import { motion } from 'motion/react'
import Secao from './Secao.jsx'
import Reveal, { lista, item } from './fx/Reveal.jsx'
import TiltCard from './fx/TiltCard.jsx'
import { perfil, formacao, cursos } from '../data/perfil.js'

export default function Sobre() {
  return (
    <Secao id="sobre" numero="01" titulo="Sobre mim">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 leading-relaxed text-muted">
          {perfil.sobre.map((p, i) => (
            <Reveal key={p} delay={i * 0.12}>
              <p>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <p className="pt-2 font-mono text-sm text-white/70">
              📍 {perfil.local}
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={lista}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-5 [perspective:1000px]"
        >
          {perfil.foto && (
            <motion.img
              variants={item}
              src={perfil.foto}
              alt={`Foto de ${perfil.nomeCurto}`}
              className="aspect-square w-full max-w-xs rounded-2xl border border-line object-cover"
            />
          )}

          <motion.div variants={item}>
            <TiltCard className="rounded-2xl border border-line bg-surface p-5">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent2">
                Formação
              </h3>
              {formacao.map((f) => (
                <div key={f.titulo}>
                  <p className="font-semibold">{f.titulo}</p>
                  <p className="text-sm text-muted">{f.local}</p>
                  <p className="text-sm text-muted">{f.periodo}</p>
                </div>
              ))}
            </TiltCard>
          </motion.div>

          <motion.div variants={item}>
            <TiltCard className="rounded-2xl border border-line bg-surface p-5">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent2">
                Cursos técnicos
              </h3>
              <ul className="space-y-1 text-sm">
                {cursos.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>
    </Secao>
  )
}
