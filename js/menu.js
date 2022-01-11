const btnMobile = document.getElementById("btnMobile")

function toggleMenu() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('ativo')
}

btnMobile.addEventListener('click', toggleMenu)