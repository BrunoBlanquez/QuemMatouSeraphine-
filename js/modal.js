let modalContent = {
  vi: {
    backgroundImg: "./img/vi-bg.png",
    charName: "Vi",
    subTitle: "A Defensora de Piltover",
    description: "Antiga criminosa das ruas violentas de Zaun, Vi é uma mulher temível, impulsiva e explosiva que tem muito pouco respeito por autoridades. Após ter crescido completamente só, Vi desenvolveu instintos de sobrevivência extremamente certeiros e um senso de humor extremamente ácido. Agora trabalhando com os Vigias de Piltover para manter a paz, ela porta poderosas manoplas hextec capazes de esmagar paredes e suspeitos com a mesma facilidade.",
    url: "./páginas-vi/vi1.html"
  },

  caitlyn: {
    backgroundImg: "./img/XerifeCait.jpg",
    charName: "Caitlyn",
    subTitle: "A Xerife de Piltover",
    description: "Conhecida como sua melhor pacificadora, Caitlyn também é a melhor escolha de Piltover para livrar a cidade de seus elementos criminosos elusivos. É comum que ela faça dupla com Vi, agindo como um contraponto de calmaria para a natureza impetuosa de sua parceira. Mesmo carregando um rifle hextec único, a arma mais poderosa de Caitlyn é seu intelecto superior, que permite que ela prepare elaboradas armadilhas para qualquer fora da lei tolo o suficiente para operar na Cidade do Progresso.",
    url: "./páginas-cait/cait1.html"
  },
  
  ekko: {
    backgroundImg: "./img/ekkoBG.jpg",
    charName: "Ekko",
    subTitle: "O rapaz que estilhaçou o tempo",
    description: "Um prodígio das violentas ruas de Zaun, Ekko manipula o tempo para reverter qualquer situação a seu favor. Usando sua própria invenção, o Revo-Z, ele explora as possíveis bifurcações da realidade para criar o momento perfeito. Embora valorize muito sua liberdade, quando algo ameaça seus amigos, ele não mede esforços para defendê-los. Para meros observadores, Ekko parece conseguir o impossível sempre de primeira.",
    url: "./páginas-ekko/ekko1.html"
  },
}

function limpaModal() {
  let personagemBg = document.getElementById("personagemBg");
  let subtitulo = document.getElementById('personagemSubtitulo');
  let historia = document.getElementById("personagemHistoria");
  let comecar = document.getElementById("comecarJogo");

  personagemBg.replaceChildren([]);
  subtitulo.replaceChildren([]);
  historia.replaceChildren([]);
  comecar.replaceChildren([]);
}

function selecionarPersonagem(personagem) {
  let dadosPersonagem = modalContent[personagem];
  let modal = document.getElementById("charModal")

  let personagemBg = document.getElementById("personagemBg");
  let subtitulo = document.getElementById('personagemSubtitulo');
  let historia = document.getElementById("personagemHistoria");
  let comecar = document.getElementById("comecarJogo");

  // imagem e titulo
  let personagemImg = document.createElement("img");
  personagemImg.src = dadosPersonagem.backgroundImg;
  personagemImg.classList.add("imgBG");

  let personagemNome = document.createElement("h1");
  personagemNome.innerText = dadosPersonagem.charName;
  personagemNome.classList.add("nome-personagem-bg");

  personagemBg.appendChild(personagemNome);
  personagemBg.appendChild(personagemImg);

  // subtitulo
  let personagemSubtitulo = document.createElement("h2");
  personagemSubtitulo.innerText = dadosPersonagem.subTitle;
  personagemSubtitulo.classList.add("subtitulo");

  subtitulo.appendChild(personagemSubtitulo);

  // historia
  
  let personagemHistoria = document.createElement("p");
  personagemHistoria.innerText = dadosPersonagem.description;
  personagemHistoria.classList.add("descricao-personagem");

  historia.appendChild(personagemHistoria);
  // botao comecar

  let link = document.createElement("a");
  link.href = dadosPersonagem.url;

  let botao = document.createElement("button");
  botao.innerText = "Começar";
  botao.classList.add("comecar");

  link.appendChild(botao);

  comecar.appendChild(link);

  modal.style.display = "block";
}

window.onload = function() {
  let modal = document.getElementById("charModal")
  let span = document.getElementById("closeModal")

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";

    limpaModal();
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";

      limpaModal();
    }
  }
}
