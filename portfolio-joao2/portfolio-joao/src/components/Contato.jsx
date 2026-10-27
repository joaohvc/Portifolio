import { motion } from 'motion/react'
import Secao from './Secao.jsx'
import Reveal, { lista, item } from './fx/Reveal.jsx'
import { perfil } from '../data/perfil.js'

const itens = [
  { label: 'E-mail', valor: perfil.email, href: `mailto:${perfil.email}` },
  { label: 'LinkedIn', valor: 'joao-henrique-viana-do-carmo', href: perfil.linkedin },
  { label: 'GitHub', valor: 'github.com/joaohvc', href: perfil.github },
]

export default function Contato() {
  return (
    <Secao id="contato" numero="05" titulo="Contato">
      <Reveal>
        <p className="max-w-xl text-muted">
          Estou aberto a oportunidades de estágio e desenvolvimento. Vamos
          conversar?
        </p>
      </Reveal>

      <motion.ul
        variants={lista}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="mt-8 grid gap-4 sm:grid-cols-3"
      >
        {itens.map((i) => (
          <motion.li key={i.label} variants={item}>
            <motion.a
              href={i.href}
              target={i.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
              className="group relative block overflow-hidden rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent"
            >
              <motion.span
                aria-hidden
                variants={{ hover: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent2/10"
              />
              <div className="relative flex items-start justify-between">
                <p className="font-mono text-xs uppercase tracking-widest text-accent2">
                  {i.label}
                </p>
                <motion.span
                  variants={{ hover: { x: 4, y: -4 } }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="text-muted"
                >
                  ↗
                </motion.span>
              </div>
              <p className="relative mt-2 break-all text-sm">{i.valor}</p>
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </Secao>
  )
}
