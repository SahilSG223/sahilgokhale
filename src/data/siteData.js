import cloudactLogo from '../assets/cloudact_cpa_professional_corporation_logo.jpg'
import fantasyImage from '../assets/fantasy.png'
import guhuzaLogo from '../assets/guhuza.png'
import linkedinIcon from '../assets/linkedin.png'
import mailblockImage from '../assets/mailblock.png'
import trueBalanceImage from '../assets/truebalance.jpg'

export const experiences = [
  {
    org: 'CloudAct CPA Professional Corporation',
    logoSrc: cloudactLogo,
    logoAlt: 'CloudAct',
    role: 'AI Engineer',
    summary:
      'Built a **RAG pipeline** with **Node.js, Vite, Claude, Docker, PostgreSQL, and Prisma** to automate legal document synthesis, **reduce manual reporting time by 70%**, and create an **agentic chatbot** for client intake and consultation scheduling.',
    period: 'Jan 2026 - Apr 2026',
  },
  {
    org: 'Guhuza',
    logoSrc: guhuzaLogo,
    logoAlt: 'Guhuza',
    wordmark: 'Guhuza',
    role: 'Data Analyst',
    summary:
      'Optimized **MySQL and Pandas workflows**, built **Plotly dashboards in Docker**, and automated reporting across **10,000+ records** to improve stakeholder visibility.',
    period: 'Jun 2025 - Aug 2025',
  },
]

export const projects = [
  {
    name: 'True Balance',
    type: 'Financial Planning Platform',
    image: trueBalanceImage,
    award: '\u{1F3C6} **Winner**, Best Use of Auth0',
    description:
      'A full-stack personal finance platform that tracks debt, expenses, and income while generating AI-guided budgeting and payoff recommendations.',
    stack: 'Next.js, JavaScript, MongoDB, Tailwind, Auth0, Gemini API, GCP',
    impact:
      'Combined a secure multi-tenant data model with a dual-stage Gemini pipeline for text-to-JSON extraction, chart generation, and context-aware financial guidance.',
  },
  {
    name: 'Yahoo Fantasy Assistant',
    type: 'Fantasy Sports Analytics Tool',
    image: fantasyImage,
    description:
      'A predictive fantasy basketball assistant that evaluates trades and projects player value using live roster data and machine learning forecasts.',
    stack: 'Python, Flask, Vite.js, Scikit-Learn, Pandas, Yahoo Fantasy API, NBA API',
    impact:
      'Used a Random Forest regressor trained on 2022-2026 NBA data to power projections and automated trade evaluation inside a full-stack dashboard.',
  },
  {
    name: 'MailBlock',
    type: 'AI-Powered Email Spam Filter',
    image: mailblockImage,
    description:
      'An AI-driven email filtering system that classifies and organizes incoming messages to enhance productivity and reduce inbox clutter.',
    stack: 'Python, FastAPI, Vite.js, Scikit-Learn, Pandas, Numpy, DistilBERT, GCP',
    impact:
      'Built an email classification pipeline using a fine-tuned DistilBERT model to improve spam detection and inbox organization.',
  },
]

export const skills = [
  'C',
  'Python',
  'C#',
  'SQL',
  'JavaScript',
  'Node.js',
  'Next.js',
  'Tailwind',
  'Postgres',
  'Docker',
  'MongoDB',
  'Auth0',
  'Flask',
  'FastAPI',
  'Scikit-Learn',
  'C++',
  'Prisma',
  'GCP',
  'Pytorch',
  'PowerBI',
]

export const contactLinks = [
  {
    label: 'Phone',
    value: '+1 905 299 3602',
    href: 'tel:+19052993602',
    icon: '\u260E',
  },
  {
    label: 'Email',
    value: 'sgokhale@uwaterloo.ca',
    href: 'mailto:sgokhale@uwaterloo.ca',
    icon: '\u2709',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sahil-gokhale-7523b4258',
    href: 'https://www.linkedin.com/in/sahil-gokhale-7523b4258/',
    iconSrc: linkedinIcon,
    iconAlt: 'LinkedIn',
  },
  {
    label: 'GitHub',
    value: 'github.com/SahilSG223',
    href: 'https://github.com/SahilSG223',
    iconSrc: 'https://github.com/favicon.ico',
    iconAlt: 'GitHub',
  },
]
