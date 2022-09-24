const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const data = numeros.reduce((prev,curr)=>{
    return prev + curr;
},0);
console.log(data);