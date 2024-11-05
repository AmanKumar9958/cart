let cart = [];
let productName = document.getElementById('product-name');
function addToCart(productName, price){
    const productIndex = cart.findIndex(item => item.name === productName);
    if(productIndex > -1){
        cart[productIndex].quantity += 1;
    }
    else{
        cart.push({name: productName, price: price, quantity: 1});
    }
    updateCart();
}

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