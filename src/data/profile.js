// Datos personales. Completa los campos marcados con TODO.
export const profile = {
  name: 'Jean Espinoza',
  email: 'info@jespinoza.site', 
  cvUrl: null, // Para mostrar "Descargar CV": pon el PDF en public/cv.pdf y usa '/cv.pdf'
  github: 'https://github.com/JeanEspinoza10',
  linkedin: 'https://www.linkedin.com/in/jcespinozacdev/',
  siteUrl: 'https://portafolio.jespinoza.site',
  careerStart: '2023-01-01',
};

export const yearsOfExperience = () => {
  const start = new Date(profile.careerStart);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  if (now.getMonth() < start.getMonth()) years -= 1;
  return years;
};
