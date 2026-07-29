export const experiencie = [
  {
    title: "Desarrollador Salesforce",
    description: `Diseñé e implementé una integración entre Salesforce y SharePoint utilizando LWC y Apex, definiendo la arquitectura, el flujo de datos y aplicando patrones de diseño para desarrollar una solución escalable y mantenible.
                  Desarrollé e integré servicios REST y SOAP para la comunicación entre Salesforce y sistemas externos, contribuyendo a la automatización de procesos y al intercambio seguro de información entre plataformas.`,
    company: "NTT DATA",
    date: "Noviembre 2025 - Actualidad",
  },
  {
    title: "Desarrollador FullStack",
    description: `Optimizé múltiples componentes del frontend con React y Next.js, logrando una mejora notable en la experiencia del usuario. Además, implementé middleware en Next.js para fortalecer la seguridad en el manejo de datos y desarrollé un sistema de roles de usuario en el backend con Django, lo que permitió un control más eficiente y seguro del acceso a la información.`,
    company: "Olimpo Bet",
    date: "Julio 2025 - Noviembre 2025",
  },
  {
    title: "Voluntariado",
    description: `Esta experiencia ha sido una de las más enriquecedoras, ya que la tecnología que utilizan es WordPress, un framework que no había tenido la oportunidad de explorar antes. Sin embargo, lejos de ser un impedimento, me permitió sumergirme en la documentación, aprender de manera constante y aplicar mi resiliencia para atender los diferentes requerimientos de manera efectiva.`,
    company: "CVA Perú",
    date: "Noviembre 2024 - Enero 2025",
  },
  {
    title: "Programador TIC",
    description: `Durante mi estadía, logré mejorar los procesos del sistema CRM. Entre los principales logros, destaco la automatización del envío de notificaciones, lo que contribuyó a mejorar los tiempos de revisión de documentos. Automatizé el envío de los documentos a los encargados de la OPP, como el Sales Specialist, el BDM y el jefe de departamento. Además, aumenté el número de atenciones a los requerimientos de software del sistema CRM.`,
    company: "WIN EMPRESAS",
    date: "Marzo 2024 - Junio 2025",
  },
  {
    title: "Asistente de backoffice",
    description: `Desarrollé e implementé una aplicación para el despliegue automatizado de archivos en los diferentes PCs dentro de la red de la entidad, reduciendo el tiempo de ejecución de 2 días a solo medio día al eliminar el proceso manual.
                Propuse, desarrollé e implementé una aplicación para la generación de documentos según los formatos de solicitud de accesos. Además, integré la comunicación con el software de firma digital y automaticé la carga del documento firmado en nuestra aplicación.
`,
    company: "MIGRACIONES",
    date: "Enero 2023 - Marzo 2024",
  },
];


export const calculateExperience = () => {
  const startDate = new Date("2023-01-01"); // inicio de experiencia

  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return {
    years,
    months
  };
};
