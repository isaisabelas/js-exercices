const companions = ['Astarion', 'Karlach', 'Gale', 'Shadowheart', 'Laezel']

//console.log(companions)
console.log(...companions)
console.log(...companions[0]) // A, s, t, a, r, i, o, n
console.log(...companions[3]) // S, h, a, d, o, w, h, e, a, r, t

const companionsCopy = companions // não é uma cópia real, mas sim uma referência que aponta para o mesmo array

companionsCopy.pop() // remove o último elemento
companionsCopy.push('Wyll')

console.log({companions, companionsCopy})

//exemplo com spread 
const companionsClone = [...companions] //separado do array original

companionsClone.push('Laezel')

console.log({companions, companionsCopy, companionsClone})

const companionsObj = {...companions}

console.log({companionsObj})