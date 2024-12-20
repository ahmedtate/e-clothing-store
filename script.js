// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            event.preventDefault();
        }
    });
});

// Basic Shopping Cart
const cart = [];
const addToCart = (item) => {
    cart.push(item);
    alert(${item} has been added to your cart.);
};

const displayCart = () => {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert(Your cart: ${cart.join(', ')});
    }
};

// Example usage (These would typically be connected to buttons in your HTML)
document.querySelector('#men .category').addEventListener('click', () => addToCart('Men\'s Clothing'));
document.querySelector('#women .category').addEventListener('click', () => addToCart('Women\'s Clothing'));
document.querySelector('#kids .category').addEventListener('click', () => addToCart('Kids\' Clothing'));
document.querySelector('#contact').addEventListener('submit', displayCart);
