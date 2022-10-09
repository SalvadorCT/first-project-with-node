const http = require('http');

const servidor = http.createServer((req,res)=>{
    //proceso de la peticion
    console.log('Peticion recibida');
    res.end('Hola mundo');
});
const puerto = 3000;


servidor.listen(puerto, ()=>{
    console.log(`Escuchando en el puerto ${puerto}`);
});




