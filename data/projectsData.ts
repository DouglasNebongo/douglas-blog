import type { Project } from '@/lib/types/data'
const PROJECTS: Project[] = [
  {
    type: 'self',
    title: 'A simple http webserver in C',
    description: `This is a simple HTTP web server implemented in C. It serves static files (e.g., HTML, CSS, JavaScript) from the current directory and handles basic GET requests.`,
    imgSrc: '/static/images/sale-price-tag-96.png',
    builtWith: ['C'],
    links: [{ title: 'Github', url: 'https://github.com/DouglasNebongo/serverc.git' }],
  },

  {
    type: 'self',
    title: 'Tic tac toe C',
    description: `This is a simple implementation of a modified Tic-Tac-Toe game written in the C programming language. The game is played in the terminal and supports two players taking turns to drop their tokens into a 3x3 grid.`,
    imgSrc: '/static/images/sale-price-tag-96.png',
    builtWith: ['C'],
    links: [
      { title: 'Github', url: 'https://github.com/DouglasNebongo/Tic-Tac-Toe-In-C-Xs-Os-.git' },
    ],
  },
  {
    type: 'self',
    title: 'Personal website',
    description: `My home on the web. This site works as a portfolio, a place to share code and thoughts.`,
    imgSrc: '/static/images/sale-price-tag-96.png',
    builtWith: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Markdown', 'React'],
    links: [{ title: 'Github', url: 'https://github.com/DouglasNebongo/doug-blog.git' }],
  },
  {
    type: 'self',
    title: 'Contractor Dashboard',
    description: `Web app designed to help contractors manage clients, track invoices and analyze earnings`,
    imgSrc: '/static/images/sale-price-tag-96.png',
    builtWith: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'PostgreSQL', 'Prisma', 'Redis'],
    links: [{ title: 'Github', url: 'https://github.com/DouglasNebongo/Dashboard' }],
  },
]

export default PROJECTS
