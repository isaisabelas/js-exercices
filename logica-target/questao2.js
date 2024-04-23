//Escrever um programa onde informado um número, ele calcule a sequência Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não à sequencia. 


let number = parseInt(prompt("Digite um número:"));

function fibonacciCheck(number) {
  let fibonacci = [0,1]; //Iniciar a função criando um array com os dois números base da seqência 
  let i = 2; //Começar com o terceiro número da sequência 

  //Loop para calcular os números da sequência até ultrapassar o número fornecido
  while (fibonacci[i - 1] + fibonacci[i - 2] <= number) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // Calcular o próximo número da sequência 
  i++;
  }

  if (fibonacci.includes(number)) {
  return alert(`O número ${number} pertence à sequência Fibonacci`);
  } else { 
    return alert(`O número ${number} não pertence à sequência Fibonacci`);
  }
}

fibonacciCheck(number)

