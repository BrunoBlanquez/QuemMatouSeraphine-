function escolha() { 
  let opcao = prompt('Digite 1 ou 2 para a escolha desejada');
  if (opcao != null) {
    location = "../páginas-ekko/" + paginaatual.dataset.paginaatual + '.' + opcao + ".html"
  } else {
    alert("Resposta inválida! Por favor, responda 1 ou 2")
  }
}
let iniciar = document.querySelector("button")
const paginaatual = document.getElementById("dataset");
console.log(paginaatual.dataset.paginaatual)
iniciar.onclick = escolha;