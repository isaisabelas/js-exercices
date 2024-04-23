//Receber números inteiros num array de 5 posições 
//Calcular a soma e a multiplicação entre todos eles (em procedimentos separados), utilizando funções com parâmetros
//Retorna das informações na tela 


//for (let i = 0; i < numbers.length; i++) {
    //   sum += numbers[i]
    //    multiply = multiply * numbers[i]
    //}

//Primeiramente, havia tentado resolver o problema usando um for, porém percebi que o método reduce funcionava melhor

function calculate () {
    let numbers = []
    
    numbers.push(parseFloat(prompt("Digite o primeiro número:")))
    numbers.push(parseFloat(prompt("Digite o segundo número:")))
    numbers.push(parseFloat(prompt("Digite o terceiro número:")))
    numbers.push(parseFloat(prompt("Digite o quarto número:")))
    numbers.push(parseFloat(prompt("Digite o quinto número:")))
3
    let sum = numbers.reduce((a, b) => a + b)
    let multiply = numbers.reduce((a, b) => a * b)

    alert(`A soma dos números é: ${sum}
         A múltiplicação dos números é: ${multiply}`)


}

calculate()



