// callbacks > son funciones que se ejecutan despues de cierto tiempo
// setTimeout( function(){
//     console.log('hola mundo');
// },1000)

// setTimeout( () => {
//     console.log('hola mundo');
// },1000)

const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Salvador'
    }
    setTimeout(() => {
        callback(usuario)
    }, 1500);
}
getUsuarioById(10, ( usuario )=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});

