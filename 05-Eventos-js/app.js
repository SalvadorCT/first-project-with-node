// Evento -> accion que se realiza en un elemento
// el servidor escucha eventos

//Emitters -> emiten eventos (emisores de eventos)
//Listeners -> escuchan eventos (escuchadores de eventos)

// EventHandlers -> funciones que se ejecutan cuando se produce un evento

const EventEmitter = require('events');
// console.log(EventEmitter);

const emisorProductos = new EventEmitter();
emisorProductos.on('compra',(total,numProductos)=>{
    console.log(`El total de la compra es $${total}`);
    console.log(`Numero de productos ${numProductos}`);
    console.log('Gracias por su compra');
});

emisorProductos.emit('compra',500,3);




