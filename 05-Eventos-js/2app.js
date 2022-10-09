const estatusPedido = () =>{
    return Math.random()<0.8;
};
// for (let i = 0; i <10;i++){
//     console.log(`${estatusPedido()}`);
// }
const miPedidoDePizza = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(estatusPedido()){
            resolve('Pedido exitoso');
        }else{
            reject('Ocurrio un error');
        }
    },2000);
})
.then((resultado)=>{
    console.log(resultado);
})
.catch((error)=>{
    console.log(error);
});

// method chaining > encadenamiento de metodos


