// Para adicionar um projeto:
// 1. Coloque o print em public/projetos/ (ex.: public/projetos/meu-projeto.png)
// 2. Copie um bloco abaixo e preencha os campos.
// Se "imagem" for null, aparece um espaço reservado no lugar do print.

const imagemPublica = (nome) => `${import.meta.env.BASE_URL}projetos/${nome}`

export const projetos = [
  {
    titulo: 'JoluPijamas — Gerenciador de Estoque',
    descricao:
      'Sistema web para cadastrar, consultar, atualizar e excluir produtos, organizando o estoque por categoria, gênero e tamanho. Exibe quantidades e preços de compra e venda, com autenticação Google e controle de acesso por perfil.',
    tecnologias: [
      'Java',
      'Quarkus',
      'React',
      'JavaScript',
      'MySQL',
      'Tailwind CSS',
      'Google OAuth 2.0',
    ],
    imagem: imagemPublica('jolupijamas-dashboard.png'),
    galeria: [
      {
        src: imagemPublica('jolupijamas-dashboard.png'),
        alt: 'Dashboard do gerenciador de estoque JoluPijamas',
      },
      {
        src: imagemPublica('jolupijamas-cadastro-produto.png'),
        alt: 'Modal de cadastro de produto do JoluPijamas',
      },
      {
        src: imagemPublica('jolupijamas-login-google.png'),
        alt: 'Tela de login com Google do JoluPijamas',
      },
    ],
    github: 'https://github.com/joaohvc/Gerenciador-de-estoque',
    online: null, // link do projeto publicado, se tiver
  },
  {
    titulo: 'Acesso — Interface de Login e Cadastro',
    descricao:
      'Interface moderna de autenticação, com telas de login e criação de conta, campos de e-mail e senha e opção de lembrar o e-mail. Design minimalista e responsivo.',
    tecnologias: ['React', 'JavaScript', 'Vite'],
    imagem: imagemPublica('acesso-login.png'),
    github: 'https://github.com/joaohvc/Tela-de-loginResponsiva',
    online: null,
  },
]
