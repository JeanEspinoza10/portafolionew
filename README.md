# Portafolio — Jean Espinoza

Hecho con [Next.js](https://nextjs.org/) (App Router), en español e inglés.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000  (redirige a /es o /en)
npm run build    # build de producción
npm start
```

## Estructura

```
src/
├─ app/
│  ├─ [locale]/            /es y /en
│  │  ├─ layout.js         <html lang>, fuentes, SEO, header y footer
│  │  ├─ page.js           inicio
│  │  └─ blog/page.js      "Próximamente"
│  ├─ sitemap.js, robots.js
├─ middleware.js           redirige "/" al idioma guardado (cookie) o al del navegador
├─ i18n/                   config + diccionarios es.json / en.json (textos de la interfaz)
├─ data/                   experiencia, proyectos, certificaciones, stack, perfil (bilingües)
├─ components/             secciones de la página (+ *.module.css)
├─ lib/format.js           fechas y textos con variables
└─ styles/globals.css      tokens de diseño y animaciones
content/blog/es/           posts en Markdown (el blog se activará más adelante)
public/                    foto, íconos, preview.png, cv.pdf
```

## Editar contenido

- Textos de la interfaz: `src/i18n/dictionaries/es.json` y `en.json` (mismas claves en ambos).
- Experiencia, proyectos, certificaciones y stack: `src/data/*.js`, cada texto con `{ es, en }`.
- Email y CV: `src/data/profile.js` y `public/cv.pdf`.
