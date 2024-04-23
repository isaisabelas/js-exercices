
function analyzeNumber () {
    chosenNumber = parseFloat(prompt(`Escolha um número:`));

    chosenTask = parseFloat(prompt(
        `Opções: 
        1- Calcular par ou ímpar 
        2- Calcular positivo ou negativo`));

    switch(chosenTask) {
        case 1:
            if (chosenNumber % 2 === 0){
                alert(`O número é par`);
            } else {
                alert(`O número é ímpar`);
            }   break;
        
        case 2:
            if (chosenNumber < 0) {
                alert(`O número é negativo`);
            } else {56
                alert(`O número é positivo`);
            }   break;
        
            default:
                alert(`Opção inválida. Escolha uma das opções disponíveis`);

    }
}

analyzeNumber();