document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const product = this.parentNode.parentNode;
            const productName = product.querySelector("h3").innerText;
            const productPrice = product.querySelector(".price").innerText;
            alert(`Added ${productName} to the cart. Price: ${productPrice}`);
            // You can implement more advanced cart functionality here
        });
    });
});
