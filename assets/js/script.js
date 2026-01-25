

const menuHamburger = document.querySelector(".menu_hamburger")
const navLinks = document.querySelector(".nav-links")
const body = document.querySelector("body")

// pour que le menu hamburger fonctionne sur mobile à chaque clique sur le bouton la classe mobile-menu apparaît et quand je reclique la classe disparaît
menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile_menu')
    body.classList.toggle('mobile-menu-visible')
})


// fonction pour récuperer la réponse de l'utilisateur
function preferedPlant() {
    var userInput = document.getElementById("plant-input").value
    alert('Votre plante préféré est : ' + userInput)

}

