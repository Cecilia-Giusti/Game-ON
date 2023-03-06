// MENU BURGER

//Variables pour le menu burger
const link = document.getElementById("link");
const burger = document.getElementById("burger");
const ul = document.querySelector("ul");

// Menu burger
link.addEventListener("click", function (e) {
  e.preventDefault();
  burger.classList.toggle("open");
  ul.classList.toggle("open");
});
