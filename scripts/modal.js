// OUVERTURE ET FERMETURE DE LA MODALE

//Elements du DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.getElementById("close");

// Evenement au click qui lance la modale
modalBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    resetModal();
    modalbg.setAttribute("class", "bground display-block");
  })
);

// Evenement au click qui ferme la modale
closeBtn.addEventListener("click", function () {
  closeModal();
});

// Fonction de fermeture de la modale
function closeModal() {
  modalbg.setAttribute("class", "bground display-none");
}

//Fonction de reset pour la modale
function resetModal() {
  //Reset de tous les champs
  form.reset();

  // Retirer les bordures rouges et les messages d'erreurs
  const formItems = [first, last, email, birthdate, quantity];

  formItems.forEach(function (item) {
    deleteErrorMessage(item);
    deleteErrorInput(item);
  });

  // Retirer les bordures rouges et les messages d'erreurs pour les CGU
  deleteErrorMessageCgu();
  deleteErrorCheckbox();
}
