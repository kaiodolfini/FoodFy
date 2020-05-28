const cards = document.querySelectorAll(".card");
const buttons = document.getElementsByClassName("show-hide");

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        window.location.href = `/recipes/${i}`
    })
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
        const id = (event.target).getAttribute("data-target")
        if (document.getElementById(id).style.display == "block") {
            document.getElementById(id).style.display = "none"
            event.target.innerHTML = "MOSTRAR"
        } else {
            document.getElementById(id).style.display = "block"
            event.target.innerHTML = "ESCONDER"
        }
    })
}