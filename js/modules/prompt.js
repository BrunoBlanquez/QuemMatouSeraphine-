export default function initPrompt() {
  let opcao = prompt('Digite 1 ou 2 para a escolha desejada');
  // const botaoEscolha = document.querySelector('data-escolha="btnEscolha"')
  // console.log(botaoEscolha)
  function escolha() { 
    if (opcao == 1) {
      console.log('Funciona!')
    } else if (opcao == 2) {
      location = "../páginas-ekko/1.1-ekko.html"
    } else {
      alert("Resposta inválida! Por favor, responsa 1 ou 2")
    }
  }
  return escolha();
}
