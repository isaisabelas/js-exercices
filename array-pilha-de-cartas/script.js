//Escrever um programa para simular um baralho de cartas. 

//Iniciar mostrando um menu interativo contendo: 
//- A quantidade de cartas que estão atualmente no baralho 
//- As opções: 
// 1- Adicionar uma carta 
// 2- Puxar uma carta 
// 3 - Sair 

//"Adicionar uma carta" -> O programa deve perguntar o nome da carta e adicioná-la no topo no baralho 

//"Puxar uma carta" -> O programa deve retirar a carta do topo do baralho e mostrar na tela o nome da mesma 

//O programa só deve ser encerrado ao escolher a opção "Sair", caso contrário, deve voltar ao menu 


const baralho = []
let opcao = ""

do {
  opcao = prompt(
    "Cartas no baralho: " + baralho.length +
    "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  )

  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é a carta?")
      baralho.push(novaCarta)
      break
    case "2":
      const cartaPuxada = baralho.pop()
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho!")
      } else {
        alert("Você puxou um(a) " + cartaPuxada)
      }
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
  }

} while (opcao !== "3");



