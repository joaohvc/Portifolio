import { MotionConfig } from 'motion/react'
import ScrollProgress from './components/fx/ScrollProgress.jsx'
import Spotlight from './components/fx/Spotlight.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Habilidades from './components/Habilidades.jsx'
import Experiencia from './components/Experiencia.jsx'
import Projetos from './components/Projetos.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    // reducedMotion="user": quem ativou "reduzir movimento" no sistema não vê as animações de deslocamento.
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen">
        <ScrollProgress />
        <Spotlight />
        <Header />
        <main className="relative z-10">
          <Hero />
          <Sobre />
          <Habilidades />
          <Experiencia />
          <Projetos />
          <Contato />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
