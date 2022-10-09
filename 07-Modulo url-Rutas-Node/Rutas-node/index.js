// servidor http

const http = require('http');
const cursos = require('./cursos.js');

const servidor = http.createServer((req,res)=>{
    const {method} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGet(req,res);
        case 'POST':
            return manejarSolicitudPost(req,res);
        case 'PUT':
            return manejarSolicitudPut(req,res);

        default:
            console.log(`Metodo ${method} no soportado`);
    }
});
const PUERTO=3000;

function manejarSolicitudGet(req,res){
    const path = req.url;

    if(path === '/'){
        res.statusCode = 200;
        return res.end('Bienvenido a mi Primer Servidor y API creado con Node.js');
    }else if(path === '/cursos'){
        res.statusCode = 200;
        // res.setHeader('Content-Type','application/json');
        return res.end(JSON.stringify(cursos.infoCursos));
    }else if (path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }

    res.statusCode = 404;
    return res.end('Error 404: No se encuentra el recurso solicitado');
}

function manejarSolicitudPost(req,res){
    const path = req.url;

    if(path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end('El servidor recibio una solicitud POST para el recurso /cursos/programacion');
    }

};
function manejarSolicitudPut(req,res){
    const path = req.url;

    if(path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end('El servidor recibio una solicitud PUT para el recurso /cursos/programacion');
    }

}


servidor.listen(PUERTO,()=>{
    console.log(`servidor escuchando en el puerto ${PUERTO}🚀`);
})

