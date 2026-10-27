# Portfólio — João Henrique

React + Vite + JavaScript + Tailwind CSS + Motion (animações).

## Rodar

```bash
npm install
npm run dev
```

## Como editar

- `src/data/perfil.js`: seus dados (sobre, habilidades, formação, experiência, contatos).
- `src/data/projetos.js`: seus projetos. Coloque os prints em `public/projetos/` e aponte em `imagem: '/projetos/nome.png'`.
- Para projetos com galeria, adicione `galeria` como uma lista ordenada de objetos `{ src, alt }`; a primeira imagem também deve ser usada em `imagem` para aparecer no card. Projetos sem `galeria` mantêm a ampliação de imagem única.
- Foto: coloque em `public/foto.jpg` e use `foto: '/foto.jpg'` em `perfil.js`.

## Publicar

```bash
npm run build
```

Na Vercel ou no Netlify, importe o repositório do GitHub: build `npm run build`, pasta de saída `dist`.

## Animações

Feitas com a biblioteca `motion` (`import { motion } from 'motion/react'`). Os efeitos reutilizáveis ficam em `src/components/fx/`:

- `ScrollProgress`: barra de progresso de leitura no topo.
- `Spotlight`: luz que segue o cursor.
- `Reveal`: entrada com fade, deslocamento e blur ao rolar.
- `TiltCard`: card com inclinação 3D e brilho que segue o mouse.
- `Magnetic`: botões atraídos pelo cursor.

Quem ativa "reduzir movimento" no sistema operacional vê a versão com menos movimento (`MotionConfig` em `App.jsx`).
