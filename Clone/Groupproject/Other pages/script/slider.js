const productCards = document.querySelectorAll('.product-card');
let currentIndex = 0;

function showNextProduct() {
    productCards[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % productCards.length;
    productCards[currentIndex].style.display = 'block';
}

setInterval(showNextProduct, 5000); // Change the image every 5 seconds
