// Json 
// Json es un formato de datos que se utiliza 
// para intercambiar datos entre aplicaciones

// Los datos se almacenan en pares de nombre y valor

// const curso = require('./curso.json');

// console.log(curso)
// console.log(typeof curso)
// console.log(curso.nombre)
// console.log(curso.temas[1])

let infoCurso = {
    "Titulo": "Aprende node.js",
    "nombre": "Salvador",
    "temas": ["node.js", "javascript", "programacion"],
    "paginas": 200,
    "numVistas":123321,
    "esPublico": true
}
// stringify > convierte un objeto a un string
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON)

// parse > convierte un string a un objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto)
console.log(infoCursoObjeto.temas[1])

