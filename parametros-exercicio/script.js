//Criar 4 funções que aceitem qualquer quantidade de parâmetros, usando arrow functions 

//Calcular as seguintes operações: 

//Média aritmética simples =>
const average = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

console.log(`Média Aritmética Simples: ${average(3, 6, 9, 12, 15)}`)


//Média aritmética ponderada =>
//Somar a multiplicação dos valores por seus respectivos pesos
//Dividir o total pela soma dos pesos 

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, {number, weight}) => accum + (number * weight ?? 1), 0)
    const weightSum = entries.reduce((accum, entry) => accum + entry.weight ?? 1, 0)
    return sum / weightSum

}

console.log(`Média Aritmética Ponderada: ${weightedAverage(
    {number: 9, weight: 3},
    {number: 7, weight: 1},
    {number: 10, weight: 1},

)}`)

//Mediana 
//Número central da lista 
const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    } 

    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return average(firstMedian, secondMedian)
}

console.log(`Mediana: ${2, 5, 99, 4, 42, 7}`)
console.log(`Mediana: ${15, 5, 99, 4, 9}`)


// Moda 

const mode = (...numbers) => {
    //[n, qtd], [n, qtd], [n, qtd] array bidimensional
    const quantities = numbers.map(num => [
        num, 
        numbers.filter(n => num === n).length // filtra todos os elementos do array principal que são iguais ao elemento atual, devolvendo todas as ocorrencias do número
    ])
    quantities.sort((a, b) => b[1] - a[1]) // coloca o número que aparece mais vezes no topo do array 
    return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 4, 4)}`)