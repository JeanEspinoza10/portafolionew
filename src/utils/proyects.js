import appSvg from "../assets/appingles.svg";
import apiSvg from "../assets/apideploy.svg";
import appShortSvg from "../assets/shortlinks.png";
import apiShortSvg from "../assets/apishort.png";
import react from "../assets/react.svg";
import openIA from "../assets/openia.svg";
import python from "../assets/python.svg";
import postgresql from "../assets/postgresql.svg";
import nodeSvg from "../assets/nodejs.svg";

export const proyects = [
    {
        "title": "App Ingles",
        "img_url" : appSvg,
        "link": "https://github.com/JeanEspinoza10/appLearnEnglish",
        "description" : `
                        Este proyecto utiliza la API de OpenAI para generar frases en inglés y guarda un historial de las creadas, lo que te permite mejorar tu listening y reading. Repite y repasa las frases para fortalecer tu aprendizaje de forma interactiva y personalizada.
        `,
        "tech_stack" : [
            {
                "name" : "REACT",
                "url": react
            },
            {
                "name" : "OPENAI",
                "url": openIA
            }
        ]
    },
    {
        "title": "PhraseForge",
        "img_url" : apiSvg,
        "link": "https://github.com/JeanEspinoza10/backendAppLearning",
        "description" : `API para generar frases en inglés utilizando el framework Flask. Tiene autenticación y registro de usuario mediante JWT.`,
        "tech_stack" : [
            {
                "name" : "PYTHON",
                "url": python
            },
            {
                "name" : "POSTGRES",
                "url": postgresql
            }
        ]
    },
    {
        "title": "SHORTLINK",
        "img_url" : appShortSvg,
        "link": "https://github.com/JeanEspinoza10/frontShortLinks",
        "description" : `Esta aplicación te permite acortar enlaces fácilmente para compartirlos con amigos, y además, te proporciona un seguimiento en tiempo real de cuántas personas están accediendo al enlace acortado.    
        `,
        "tech_stack" : [
            {
                "name" : "REACT",
                "url": react
            }
        ]
    },
    {
        "title": "API - SHORTLINK",
        "img_url" : apiShortSvg,
        "link": "https://github.com/JeanEspinoza10/backendShortLinks",
        "description" : `Es la API de la aplicación para acortar enlaces. Permite crear, obtener, actualizar y eliminar enlaces acortados. Está desarrollada utilizando el framework Node.js y el modelo de datos PostgreSQL.`,
        "tech_stack" : [
            {
                "name" : "NODEJS",
                "url": nodeSvg
            },
            {
                "name" : "POSTGRES",
                "url": postgresql
            }
        ]
    }
];