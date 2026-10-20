// icon: archivo en public/icons. Sin icon, se muestra la abreviatura (mono).
export const stack = [
  {
    group: { es: 'Lenguajes', en: 'Languages' },
    items: [
      { name: 'Python', icon: '/icons/python.png' },
      { name: 'Java', icon: '/icons/java.png' },
      { name: 'JavaScript', icon: '/icons/javascript.png' },
      { name: 'SQL', icon: '/icons/sql.svg' },
      { name: 'Apex', mono: 'Ap' },
    ],
  },
  {
    group: { es: 'Backend', en: 'Backend' },
    items: [
      { name: 'Django', icon: '/icons/django.svg' },
      { name: 'Flask', icon: '/icons/flask.svg' },
      { name: 'Node.js', icon: '/icons/nodejs.png' },
      { name: 'Express', icon: '/icons/express.svg' },
      { name: 'Spring Boot', icon: '/icons/spring-boot.png' },
    ],
  },
  {
    group: { es: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'React', icon: '/icons/react.png' },
      { name: 'Next.js', mono: 'N' },
      { name: 'LWC', mono: 'LWC' },
    ],
  },
  {
    group: { es: 'Datos y cloud', en: 'Data & cloud' },
    items: [
      { name: 'PostgreSQL', icon: '/icons/postgresql.png' },
      { name: 'AWS', mono: 'AWS' },
      { name: 'Odoo', mono: 'Od' },
      { name: 'Salesforce', mono: 'SF' },
    ],
  },
];
