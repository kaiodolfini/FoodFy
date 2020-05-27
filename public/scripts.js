const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        window.location.href = `/recipes/${i}`
    })
}

const button = document.getElementsByClassName(".show-hide");
button.addEventListener("click", function(id) {
    if (document.getElementById(id).style.display == "block") {
        document.getElementById(id).style.display = "none"
        document.getElementById(id).value = "MOSTRAR"
    } else {
        document.getElementById(id).style.display = "block"
        document.getElementById(id).value = "ESCONDER"
    }
})

// function mostrar(id) {
//     if (document.getElementById(id).style.display == "block") {
//         document.getElementById(id).style.display = "none"
//         document.getElementById(id).value = "MOSTRAR"
//     } else {
//         document.getElementById(id).style.display = "block"
//         document.getElementById(id).value = "ESCONDER"
//     }
// }