// const isOdd = require('is-odd-num');
import isOdd from 'is-odd-num';

console.log('yo soy el index.js');

const resultado = isOdd(30);
console.log(resultado);

// dependiendo del resultado si es falso imprimir que el numero es PAR caso contrario es IMPAR
// if (resultado){
//     console.log('El numero es PAR');
// }
// else{
//     console.log('El numero es IMPAR');
// }

// Tengo la siguiente informacion del producto
const categoria = 'LECHE'
// // Si la categoria es LECHE
// console.log('TENER CUIDADO CON LA LACTOSA')
// // Si la categoria es CARNE
// console.log('NO ES VEGANO')
// // Si la categoria es VEGANO
// console.log('NO APTO PARA CARNIVOROS')
// // Si la categoria es DIVERSION
// console.log('NO APTO PARA COMER')
// Realizar todo ello mediante un switch case

switch (categoria) {
    case 'LECHE':
        console.log('TENER CUIDADO CON LA LACTOSA')
        break;
    case 'CARNE':
        console.log('NO ES VEGANO')
        break;
    case 'VEGANO':
        console.log('NO APTO PARA CARNIVOROS')
        break;
    case 'DIVERSION':
        console.log('NO APTO PARA COMER')
        break;
    default:
        console.log('NO SE ENCONTRO LA CATEGORIA')
}