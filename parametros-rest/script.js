//Rest Params => premite a uma função receber qualquer número de parâmetros 
// permite manipular esses parâmetros como uma array na definição da função
// deve ser um último na lista de parâmetros


function sum (param, ...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0) //Colocando 0 no final, o acumulador é iniciado em 0
}

console.log(sum(1, 1))
console.log(sum(2, 2, 2, 2, 2)) 
console.log(sum(32, 5, 3434, 5233)) 