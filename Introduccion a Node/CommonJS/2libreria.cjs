//CommonJS
// sirve para indicaar al compilador que se tiene que ejecutar de arriba hacia abajo

"use strict";
const sumar = (num1,num2) => {
    return num1 + num2;
}

const restar = (num1,num2) => {
    return num1 - num2;
}

//exportar las funciones
module.exports = {
    sumar,// sumar: sumar,
    restar,// restar: restar
}

// ECMAScript Modules