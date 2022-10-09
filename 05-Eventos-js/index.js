// Promesas
// Objeto que representa el eventual resultado
// (o error) de una operacion asincrona

// Funcion callback
// Funcion que se pasa a otra funcion como argumento
// y luego se ejecuta dentro de la funcion externa

const promesaCumplida = false;

const miPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(promesaCumplida){
            resolve('Promesa cumplida');
        }else{
            reject('Promesa rechazada');
        }
    },2000);
});
miPromesa.then((resultado)=>{
    console.log(resultado);
}).catch((error)=>{
    console.log(error);
});





