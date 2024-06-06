const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-modal")
const cartModal = document.getElementById("card-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkouBtn = document.getElementById("checkout-btn")
const closeMobalBtn = document.getElementById("close-mobal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInpur = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")

 // Abrir modal do carrinho
cartBtn.addEventListener("click", function()  {
    cartModal.style.display = "flex"
})


// Fechar o modal quando clicar fora 
cartModal.addEventListener("click", function(event){
    console.log(event);{
        cartModal.style.display = "nome"
    }
})

closeMobalBtn.addEventListener("click", function(event){
    cartModal.style.display = "nome"
})

menu.addEventListener("click", function(event){
    //console.log(event.target === cartModal)

    let parentButton = event.target.closest(".add-to-cart-btn")

    console.log(parentButton);
        
})