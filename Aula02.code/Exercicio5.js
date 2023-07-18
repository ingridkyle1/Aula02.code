//Imprimir os primeiros 10 números da sequência de Fibonacci.1.

let fibonacci = [0, 1]; // Inicializando a sequência com os dois primeiros números

for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // Calculando o próximo número da sequência
}

for (let i = 0; i < 10; i++) {
  console.log(fibonacci[i]); // Imprimindo os 10 primeiros números da sequência
}