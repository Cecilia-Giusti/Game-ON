// MENU BURGER

//Variables pour le menu burger
let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')

// Menu burger
link.addEventListener('click', function (e) {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
})