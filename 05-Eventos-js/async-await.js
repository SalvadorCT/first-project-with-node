function ordenarProducto(producto){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Ordenando producto ${producto}`);
            if(producto === 'pizza'){
                resolve('Pizza lista');
            }else{
                reject('Producto no disponible');
            }
        }, 2000);
    });
}
const procesarPedido = (respuesta) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Procesando pedido');
            resolve(`Pedido procesado: ${respuesta}`);
        }, 3000);
    });
}

ordenarProducto('pizza')
    .then((respuesta) => {
        console.log(respuesta);
        console.log('Resuesta recibida');
        return procesarPedido(respuesta);
    })
    .then(rep => console.log(rep))
    .catch(error => console.log(error));






