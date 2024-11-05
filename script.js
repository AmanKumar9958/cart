let cart = [];

// main function..
function addToCart(productName, price){
    const productIndex = cart.findIndex(item => item.name === productName);
    if(productIndex > -1){
        cart[productIndex].quantity += 1;
    }
    else{
        cart.push({name: productName, price: price, quantity: 1});
    }
    updateCart();
    updateCartCount();
}

// cart inner working..
function updateCart(){
    const cartContainer = document.getElementById('cart');
    const totalContainer = document.getElementById('total');

    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} : $${item.price} x ${item.quantity} = $${itemTotal}`;

        cartContainer.appendChild(cartItem);
    });

    totalContainer.textContent = `Total: $${total}`;
}

// counting update..
function updateCartCount(){
    const cartCount = document.getElementById('cart-count');
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalQuantity;
}

// checkout..
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = 0;
}
