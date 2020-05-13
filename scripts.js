const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for(let card of cards){
    card.addEventListener("click", function(){
        const receitaId = card.getAttribute("id");
        const titulo = document.querySelector(`#${receitaId} > .card_titulo_receita > p`).textContent;
        const autor = document.querySelector(`#${receitaId} > .card_autor_receita > p`).textContent;
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("img").src = `Assets/${receitaId}.png`;
        modalOverlay.querySelector("#titulo").textContent = titulo;
        modalOverlay.querySelector("#autor").textContent = autor;
        
    })
}

closeModal = document.querySelector("#fechar").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("img").src = "";
})