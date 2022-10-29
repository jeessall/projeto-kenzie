

const buyButton = document.getElementById ("buy-button")
const cartForm = document.getElementById ("cart-form")

const addTicket = document.getElementById ("add-ticket")
const removeTicket = document.getElementById ("remove-ticket")

const ticket = document.getElementById ("ticket")

const ticketPrice = document.getElementById("ticket-price")

//quando clicar no botao + vai aumentar a quantidade//

addTicket.addEventListener("click", (e) =>{
    e.preventDefault();
    ticket.innerText = parseInt(ticket.innerText)+1
    ticketPrice.innerText = parseInt(ticket.innerText)*90
})

//quando clicar no botao - vai diminuir a quantidade//

removeTicket.addEventListener("click", (e) =>{
    e.preventDefault();
    if(parseInt(ticket.innerText) !== 1) (
        ticket.innerText = parseInt(ticket.innerText)-1
        
    )

    ticketPrice.innerText = parseInt(ticket.innerText)*90
})


//quando clicar em finalizar a compra vai enviar o formulario//

cartForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = cartForm.nome.value;
    const email = cartForm.email.value;
    const quantityTickets = ticket.innerText;

    window.localStorage.setItem("nome", nome)
    window.localStorage.setItem("email", email)
    window.localStorage.setItem("quantityTickets", quantityTickets)
    window.location.href = "finalizacao.html"

})

