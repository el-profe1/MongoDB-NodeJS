let infoCursos = {
programacion:[
    {
        id:1,
        titulo: 'Introduccion a la programacion',
        lenguaje: 'python',
        alumnos: 200,
        nivel: 'basico'
    },    {
        id:2,
        titulo: 'Python intermedio',
        lenguaje: 'python',
        alumnos: 50,
        nivel: 'intermedio'
    },    {
        id:3,
        titulo: 'Introduccion a JavaScript',
        lenguaje: 'javascript',
        alumnos: 200,
        nivel: 'basico'
    }
],
matematicas:[
    {
        id:1,
        titulo: 'Introduccion al calculo',
        tema: 'calculo',
        alumnos: 80,
        nivel: 'basico'
    },
    {
        id:2,
        titulo: 'Algebra',
        tema: 'algebra',
        alumnos: 47,
        nivel: 'intermedio'
    }
]
}

module.exports.infoCursos = infoCursos;
