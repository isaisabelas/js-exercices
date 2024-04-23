
function operacao (num1, num2) {
    num1 = parseFloat(prompt("digite um número:"))
    num2 = parseFloat(prompt("digite outro numero "))

    mod = num1 % num2;
    raiz1 = Math.sqrt(num1);
    raiz2 = Math.sqrt(num2);

    return alert(
        `O resto da divisão entre os dois números é ${mod.toFixed(2)}
        A raiz quadrada de ${num1.toFixed(2)} é ${raiz1.toFixed(2)}
        A raiz quadrada de ${num2.toFixed(2)} é ${raiz2.toFixed(2)}`)

}

operacao();