//Escrever um programa para simular uma fila de espera em um consultório médico. 

//Iniciar mostrando um menu interativo contendo a lista de todos os pacientes esperando 
//Mostrar a posição de cada um ao lado do nome
//O menu também deve permitir escolher entre as opções "Novo Paciente" (adicionar ao fim da fila)
//"Consultar paciente" (retira o primeiro paciente da fila e mostra na tela o paciente consultado)
// e "Sair"

//O programa só deve ser encerrado ao escolher a opção "Sair"


let fila = []
let opcao = ""


do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i ++) {
    pacientes += (i + 1) + "º - " + fila [i] + "\n"
    }

    opcao = prompt(
        "Pacientes:\n" + pacientes + 
        "\nEscolha uma ação: \n1. Novo Paciente\n2. Consultar Paciente\n3. Sair"
    )
    
    switch (opcao) {
        case "1":
            const novoPaciente = prompt("Qual é o nome do paciente?")
            fila.push(novoPaciente)
            break;
        case "2":
            const pacienteConsultado = fila.shift()
            alert(pacienteConsultado + " foi removido da fila.")
            break;
        case "3":
            alert("Encerrando...") 
            break;
        default:
            alert("Opção inválida!")
            break;
    }

} while (opcao !== "3")
