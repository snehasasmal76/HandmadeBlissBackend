function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// Add to cart functionality
document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
    const quantity = document.getElementById('quantity').value;
    alert(`Added ${quantity} item(s) to cart!`);
});

