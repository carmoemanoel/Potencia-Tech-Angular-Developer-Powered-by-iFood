/*
Estamos exportando esse arquivo para ser execultado em um outro arquivo.
 */

const entradas = [5, 10, 100, 50, 98, 23];
let i = 0;



function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}



function prints(texto){
    console.log(texto);
}



module.exports = {gets, prints};

