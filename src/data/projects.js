export const projects = [
  {
    name: 'ShortLink',
    description: {
      es: 'Acortador de enlaces con seguimiento de visitas en tiempo real. Frontend en React y API REST propia.',
      en: 'Link shortener with real-time visit tracking. React frontend and a custom REST API.',
    },
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    links: [
      { label: { es: 'Código frontend', en: 'Frontend code' }, href: 'https://github.com/JeanEspinoza10/frontShortLinks' },
      { label: { es: 'Código API', en: 'API code' }, href: 'https://github.com/JeanEspinoza10/backendShortLinks' },
    ],
  },
  {
    name: 'PhraseForge',
    description: {
      es: 'App para practicar inglés: genera frases con la API de OpenAI y guarda tu historial. API en Flask con autenticación JWT.',
      en: 'English practice app: generates phrases with the OpenAI API and keeps your history. Flask API with JWT authentication.',
    },
    stack: ['React', 'Python', 'Flask', 'PostgreSQL', 'OpenAI'],
    links: [
      { label: { es: 'Código app', en: 'App code' }, href: 'https://github.com/JeanEspinoza10/appLearnEnglish' },
      { label: { es: 'Código API', en: 'API code' }, href: 'https://github.com/JeanEspinoza10/backendAppLearning' },
    ],
  },
];
