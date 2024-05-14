body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
}

nav {
    background-color: #555;
    padding: 10px 0;
    text-align: center;
}

nav a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
}

.container {
    max-width: 800px;
    margin: 20px auto;
    padding: 0 20px;
}

.section {
    margin-bottom: 40px;
}

.product {
    display: flex;
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
}

.product img {
    max-width: 200px;
    height: auto;
    margin-right: 20px;
}

.product-info {
    flex: 1;
}

.product-info h3 {
    margin-top: 0;
}

.price {
    font-weight: bold;
    color: #333;
}

.add-to-cart {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.add-to-cart:hover {
    background-color: #45a049;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
}

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
