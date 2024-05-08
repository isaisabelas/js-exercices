//Criar uma função que recebe como parâmetro a data de nascimento de uma pessoa no formato string e retorne:
//A idade da pessoa no dia atual
//Sua proxima data de aniversário no formato DD/MM/AA
//Quantos dias faltam para seu próximo aniversário 


const dayjs = require('dayjs')


function birthday(date) {
    const birthday = dayjs(date) // agora brithday é uma data do dayjs
    const today = dayjs() // valor padrão é o hoje 
    const ageInYears =  today.diff(birthday, 'year') 
    const nextBirthday = birthday.add(ageInYears + 1, 'year').format('DD/MM/YY')
    //const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1


    console.log(`Idade: ${ageInYears}`)
    console.log(`Próximo aniversário em: ${nextBirthday}`)
    //console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)

} 

birthday("1998-08-31")
