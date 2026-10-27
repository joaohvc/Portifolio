import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { perfil } from '../data/perfil.js'

const links = [
  { id: 'sobre', label: 'Sobre mim' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
]

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const [ativo, setAtivo] = useState('')

  // Descobre qual seção está na tela para destacar no menu.
  useEffect(() => {
    const secoes = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) setAtivo(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    secoes.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <motion.a
          href="#inicio"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="font-mono text-sm font-medium"
        >
          <span className="text-accent">&lt;</span>
          {perfil.nomeCurto}
          <span className="text-accent2"> /&gt;</span>
        </motion.a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id} className="relative">
              <a
                href={`#${l.id}`}
                className={`relative z-10 block px-3.5 py-2 text-sm transition-colors ${
                  ativo === l.id ? 'text-white' : 'text-muted hover:text-white'
                }`}
              >
                {l.label}
              </a>
              {ativo === l.id && (
                <motion.span
                  layoutId="menu-ativo"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-lg bg-white/[0.07] ring-1 ring-white/10"
                />
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md border border-line p-2 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={aberto}
          onClick={() => setAberto((v) => !v)}
        >
          <motion.span
            animate={aberto ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-5 bg-white"
          />
          <motion.span
            animate={{ opacity: aberto ? 0 : 1 }}
            className="mt-1.5 block h-0.5 w-5 bg-white"
          />
          <motion.span
            animate={aberto ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="mt-1.5 block h-0.5 w-5 bg-white"
          />
        </button>
      </nav>

      <AnimatePresence>
        {aberto && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-line bg-bg px-5 md:hidden"
          >
            {links.map((l, i) => (
              <motion.li
                key={l.id}
                initial={{ x: -16, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i }}
              >
                <a
                  href={`#${l.id}`}
                  onClick={() => setAberto(false)}
                  className="block py-2.5 text-muted hover:text-white"
                >
                  {l.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
