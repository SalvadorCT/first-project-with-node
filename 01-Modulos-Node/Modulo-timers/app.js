
 //----------------------------------------------SetTimeout----------------------------------------------

// Ejemplo con un solo argumento.
function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
  }
  
  setTimeout(mostrarTema, 3000, 'Node.js');
  
  // Ejemplo con varios argumentos.
  function sumar(a, b) {
    console.log(a + b);
  }
  
  setTimeout(sumar, 2000, 4, 6);
  
  //----------------------------------------------SetInterval----------------------------------------------
  
  function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
  }
  
  setInterval(mostrarTema, 1500, 'Node.js');
  
  // Ejemplo con varios argumentos.

  function sumar(a, b) {
    console.log(a + b);
  }
  
  setInterval(sumar, 1500, 3, 4);
  
   //----------------------------------------------SetImmediate----------------------------------------------
  
  function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
  }
  
  console.log('Antes de setImmediate()');
  
  setImmediate(mostrarTema, 'Node.js');
  
  // Se ejecuta antes que mostrarTema porque 
  // setImmediate() ejecuta la funcion en el proximo
  // ciclo de eventos de Node.js (como codigo asincrono).


  console.log('Despues de setImmediate()');

   //------------------------------------------------------------------------------------------------------
