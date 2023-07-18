//Faça um programa que imprima na tela a tabuada de um número
//qualquer escolhido pelo usuário até o 10.

let prompt = require('prompt-sync') ()


let numero = prompt("Qual número você quer multiplicar? ");

for( let multiplicacao = 1; multiplicacao <=10; multiplicacao++) {
    let resultado = numero* multiplicacao;
    console.log( `${numero} x ${multiplicacao} = ${resultado}`)



}


