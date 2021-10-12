let contador = 0;

// function saludo(){
//     contador++;
//     console.log(contador)

//     if(contador == 5){
//         clearInterval(intervalo);
//     }
// }
//Timeout
//setTimeout(saludo, 3000)

//Interval
//let intervalo = setInterval(saludo,3000);


//Blucle infinito

function saludo(){
    contador++;
    console.log(contador)

    setTimeout(saludo,1000);
}
saludo();

