import javaSvg from "../assets/java.svg";
import pythonSvg from "../assets/python.svg";
import jsSvg from "../assets/js.svg";
import sqlSvg from "../assets/servidor-sql.svg";
import flaskSvg from "../assets/flask.svg";
import reactSvg from "../assets/react.svg";
import nodeJsSvg from "../assets/nodejs.svg";
import djangoSvg from "../assets/django.svg";
import expressSvg from "../assets/express.svg";


export const education = [
    {
        "title": "Desarrollo Web JAVA",
        "link_certfication" : "https://academico-cloud.tecsup.edu.pe/pcc/#/home/certificado?c=762080&n=COD%2FCPE%2F24%2F223&t=E",
        "insitute" : `TECSUP`,
        "description" : `Desarrollo Web con Java y Postgres.`,
        "date" : "2024",
        "tech_stack" : [
            {
                "name" : "JAVA",
                "url": "src\\assets\\java.svg"
            },
            {
                "name" : "POSTGRES",
                "url": "src\\assets\\postgresql.svg"
            },
            {
                "name" : "JavaScript",
                "url": "src\\assets\\js.svg"
            }
        ]
    },
    {
        "title": "Base de datos",
        "link_certfication" : "https://academico-cloud.tecsup.edu.pe/pcc/#/home/certificado?c=714335&n=COD%2FCPE%2F23%2F131&t=E",
        "insitute" : `TECSUP`,
        "description" : `Desarrollo Web con Java y Postgres.`,
        "date" : "2024",
        "tech_stack" : [
            {
                "name" : "POSTGRES",
                "url": "src\\assets\\postgresql.svg"
            }
        ]
    },
    {
        "title": "Desarrollo Web FullStack",
        "link_certfication" : "https://academico-cloud.tecsup.edu.pe/pcc/#/home/certificado?c=656360&n=COD%2FCPE%2F23%2F54&t=E",
        "insitute" : `TECSUP`,
        "date" : "2024",
        "description" : `Desarrollo Web con Java y Postgres.`,
        "tech_stack" : [
            {
                "name" : "Python",
                "url": "src\\assets\\python.svg"
            },
            {
                "name" : "POSTGRES",
                "url": "src\\assets\\postgresql.svg"
            },
            {
                "name" : "JavaScript",
                "url": "src\\assets\\js.svg"
            }
        ]
    }
]

export const hability = [
    {
        "title": "Lenguajes",
        "values": [
            {
                "name": "JAVA",
                "url": javaSvg
            },
            {
                "name": "Python",
                "url": pythonSvg
            },
            {
                "name": "JavaScript",
                "url": jsSvg
            },
            {
                "name": "SQL",
                "url": sqlSvg
            }
        ]
    },
    {
        "title": "Framework",
        "values": [
            {
                "name": "Flask",
                "url": flaskSvg
            },
            {
                "name": "REACT",
                "url": reactSvg
            },
            {
                "name": "NODEJS",
                "url": nodeJsSvg
            },
            {
                "name": "Django",
                "url": djangoSvg
            },
            {
                "name": "Express",
                "url": expressSvg
            }
        ]
    }
];