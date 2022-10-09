const http = require('http');

const servidor = http.createServer((req,res)=>{
    // console.log('==> req (solicitud)');
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    console.log('==> res (respuesta)');
    // console.log(res.statusCode);
    // console.log(res.statusMessage);
    // res.statusCode = 404; // not found
    // console.log(res.statusCode);
    res.setHeader('Content-Type', 'application/json');
    console.log(res.getHeader('Content-Type'));

    res.end('Hola mundo');
});

const puerto = 3000;


servidor.listen(puerto,()=>{
    console.log(`Escuchando en el puerto ${puerto}🚀`);
})


