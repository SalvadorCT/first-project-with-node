"use strict";

//esta es la forma de trabajar en ESModule
// import {} from 'path'

//Esta es la forma de importar en CommonJS
const { sumar } = require('./2libreria.js');

const resultado = sumar(1,2);
console.log(resultado);
