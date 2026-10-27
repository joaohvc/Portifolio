import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'motion/react'
import { perfil } from '../data/perfil.js'
import Magnetic from './fx/Magnetic.jsx'

const EASE = [0.22, 1, 0.36, 1]

const papeis = [
  'Estudante de Engenharia de Software',
  'Dev Full Stack',
  'Estagiário de Engenharia de Software',
  'Apaixonado por aprender',
]

// Cada letra do nome entra com um atraso (efeito cascata).
const palavra = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
}
const letra = {
  hidden: { y: '110%', rotate: 8, opacity: 0 },
  show: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE },
  },
}

function Nome({ texto }) {
  return (
    <motion.span
      variants={palavra}
      initial="hidden"
      animate="show"
      transition={{ delayChildren: 0.3 }}
      className="block"
      aria-label={texto}
    >
      {texto.split(' ').map((p, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-2 align-bottom">
          <motion.span variants={palavra} className="inline-block" aria-hidden>
            {p.split('').map((c, j) => (
              <motion.span key={j} variants={letra} className="inline-block">
                {c}
              </motion.span>
            ))}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

function PapelRotativo() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % papeis.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative h-9 overflow-hidden sm:h-10">
      <AnimatePresence mode="wait">
        <motion.p
          key={papeis[i]}
          initial={{ y: 30, opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -30, opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: EASE }}
          className="text-xl text-muted sm:text-2xl"
        >
          {papeis[i]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax: camadas se movem em velocidades diferentes ao rolar.
  const yTexto = useTransform(scrollYProgress, [0, 1], [0, 140])
  const opacidade = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const yOrbA = useTransform(scrollYProgress, [0, 1], [0, 260])
  const yOrbB = useTransform(scrollYProgress, [0, 1], [0, -120])
  const grade = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section id="inicio" ref={ref} className="relative overflow-hidden pt-16">
      {/* Grade de fundo com máscara */}
      <motion.div
        aria-hidden
        style={{
          y: grade,
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)',
        }}
        className="absolute inset-0"
      />

      {/* Orbs flutuantes */}
      <motion.div style={{ y: yOrbA }} className="absolute -left-24 top-10" aria-hidden>
        <motion.div
          animate={{ x: [0, 50, -20, 0], y: [0, 40, -30, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="h-80 w-80 rounded-full bg-accent/25 blur-3xl"
        />
      </motion.div>
      <motion.div style={{ y: yOrbB }} className="absolute -right-20 top-24" aria-hidden>
        <motion.div
          animate={{ x: [0, -60, 20, 0], y: [0, -30, 40, 0], scale: [1, 0.9, 1.2, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="h-72 w-72 rounded-full bg-accent2/20 blur-3xl"
        />
      </motion.div>

      <motion.div
        style={{ y: yTexto, opacity: opacidade }}
        className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-5 py-20"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-4 font-mono text-sm text-accent2"
        >
          Olá, eu sou
        </motion.p>

        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
          <Nome texto={perfil.nome.split(' ').slice(0, 2).join(' ')} />
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 300, damping: 12 }}
            className="gradient-text inline-block"
          >
            .
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-4"
        >
          <PapelRotativo />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="mt-6 max-w-xl text-muted"
        >
          Construo interfaces com React e Tailwind e estudo back-end com Java.
          Gosto de transformar ideias em aplicações web simples de usar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Magnetic>
            <a
              href="#projetos"
              className="inline-block rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:brightness-110"
            >
              Ver projetos
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#sobre"
              className="inline-block rounded-lg border border-line px-5 py-3 text-sm font-semibold transition hover:border-accent"
            >
              Sobre mim
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={perfil.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-lg border border-line px-5 py-3 text-sm font-semibold transition hover:border-accent2"
            >
              GitHub
            </a>
          </Magnetic>
        </motion.div>

        {/* Indicador de rolagem */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-5 hidden items-center gap-3 font-mono text-xs text-muted sm:flex"
        >
          <span className="relative block h-9 w-5 rounded-full border border-line">
            <motion.span
              animate={{ y: [6, 20, 6], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent2"
            />
          </span>
          role para explorar
        </motion.div>
      </motion.div>
    </section>
  )
}
