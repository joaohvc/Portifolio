import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Secao from './Secao.jsx'
import { lista, item } from './fx/Reveal.jsx'
import TiltCard from './fx/TiltCard.jsx'
import { projetos } from '../data/projetos.js'

function Print({ projeto, onAbrir }) {
  if (!projeto.imagem) {
    return (
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-accent/20 to-accent2/10 font-mono text-xs text-muted">
        <motion.span
          aria-hidden
          animate={{ x: ['-120%', '220%'] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
          className="absolute inset-y-0 w-1/3 -skew-x-12 bg-white/5"
        />
        print do projeto
      </div>
    )
  }
  return (
    <button
      type="button"
      onClick={() => onAbrir(projeto)}
      className="relative block w-full cursor-zoom-in overflow-hidden"
      aria-label={`Ampliar print de ${projeto.titulo}`}
    >
      <motion.img
        src={projeto.imagem}
        alt={`Print do projeto ${projeto.titulo}`}
        loading="lazy"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="aspect-video w-full object-cover object-top"
      />
      <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 font-mono text-[11px] opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
        ampliar ⤢
      </span>
    </button>
  )
}

export default function Projetos() {
  const [ampliado, setAmpliado] = useState(null)

  useEffect(() => {
    if (!ampliado) return
    const navegar = (e) => {
      if (e.key === 'Escape') {
        setAmpliado(null)
        return
      }

      const quantidade = ampliado.projeto.galeria?.length ?? 0
      if (quantidade < 2) return

      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault()
        setAmpliado((atual) => ({
          ...atual,
          indice:
            (atual.indice +
              (e.key === 'ArrowRight' ? 1 : quantidade - 1)) %
            quantidade,
        }))
      }
    }

    window.addEventListener('keydown', navegar)
    return () => window.removeEventListener('keydown', navegar)
  }, [ampliado])

  return (
    <Secao id="projetos" numero="04" titulo="Projetos">
      <motion.div
        variants={lista}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projetos.map((p) => (
          <motion.div key={p.titulo} variants={item} className="flex">
            <TiltCard className="flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent/60">
              <Print
                projeto={p}
                onAbrir={(projeto) => setAmpliado({ projeto, indice: 0 })}
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold">{p.titulo}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{p.descricao}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tecnologias.map((t) => (
                    <motion.li
                      key={t}
                      whileHover={{ y: -2, backgroundColor: 'rgba(34,211,238,0.15)' }}
                      className="rounded-md bg-white/5 px-2 py-1 font-mono text-[11px] text-accent2"
                    >
                      {t}
                    </motion.li>
                  ))}
                </ul>
                {(p.github || p.online) && (
                  <div className="mt-5 flex gap-4 text-sm font-medium">
                    {p.github && (
                      <motion.a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 3 }}
                        className="hover:text-accent"
                      >
                        Código ↗
                      </motion.a>
                    )}
                    {p.online && (
                      <motion.a
                        href={p.online}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 3 }}
                        className="hover:text-accent"
                      >
                        Ver online ↗
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {ampliado && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Visualização ampliada de ${ampliado.projeto.titulo}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setAmpliado(null)}
          >
            <div
              className="relative flex h-[calc(100dvh-2rem)] max-h-[56rem] w-full max-w-7xl flex-col sm:h-[calc(100dvh-4rem)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
                <motion.img
                  key={ampliado.projeto.galeria?.[ampliado.indice]?.src ?? ampliado.projeto.imagem}
                  src={
                    ampliado.projeto.galeria?.[ampliado.indice]?.src ??
                    ampliado.projeto.imagem
                  }
                  alt={
                    ampliado.projeto.galeria?.[ampliado.indice]?.alt ??
                    `Print do projeto ${ampliado.projeto.titulo}`
                  }
                  initial={{ scale: 0.8, opacity: 0, y: 40 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                />
              </div>
              {(ampliado.projeto.galeria?.length ?? 0) > 1 && (
                <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-between px-1 sm:px-2">
                  <button
                    type="button"
                    aria-label="Imagem anterior"
                    className="pointer-events-auto flex size-11 shrink-0 items-center justify-center rounded-full bg-black/65 text-2xl text-white backdrop-blur transition-colors hover:bg-accent"
                    onClick={(e) => {
                      e.stopPropagation()
                      setAmpliado((atual) => ({
                        ...atual,
                        indice:
                          (atual.indice +
                            atual.projeto.galeria.length -
                            1) %
                          atual.projeto.galeria.length,
                      }))
                    }}
                  >
                    <span aria-hidden="true">‹</span>
                  </button>
                  <button
                    type="button"
                    aria-label="Próxima imagem"
                    className="pointer-events-auto flex size-11 shrink-0 items-center justify-center rounded-full bg-black/65 text-2xl text-white backdrop-blur transition-colors hover:bg-accent"
                    onClick={(e) => {
                      e.stopPropagation()
                      setAmpliado((atual) => ({
                        ...atual,
                        indice:
                          (atual.indice + 1) %
                          atual.projeto.galeria.length,
                      }))
                    }}
                  >
                    <span aria-hidden="true">›</span>
                  </button>
                </div>
              )}
              {(ampliado.projeto.galeria?.length ?? 0) > 1 && (
                  <span
                    aria-live="polite"
                    aria-atomic="true"
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/65 px-3 py-1 font-mono text-xs text-white backdrop-blur"
                  >
                    {ampliado.indice + 1} de {ampliado.projeto.galeria.length}
                  </span>
              )}
            </div>
            <motion.button
              type="button"
              aria-label="Fechar visualização ampliada"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              whileHover={{ rotate: 90 }}
              className="absolute right-5 top-5 rounded-full bg-white/10 px-3 py-1.5 text-sm"
              onClick={(e) => {
                e.stopPropagation()
                setAmpliado(null)
              }}
            >
              Fechar ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </Secao>
  )
}
