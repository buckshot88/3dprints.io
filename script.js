document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = document.getElementById("cart-items");
    const clearCartButton = document.getElementById("clear-cart");

    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const product = this.closest(".product");
            const productName = product.querySelector("h3").innerText;
            const productPrice = parseFloat(product.querySelector(".price").innerText.slice(1));
            addToCart(productName, productPrice);
            updateCartUI();
        });
    });

    clearCartButton.addEventListener("click", function() {
        cart = [];
        updateCartUI();
    });

    function addToCart(name, price) {
        cart.push({ name, price });
    }

    function updateCartUI() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
            `;
            cartItems.appendChild(cartItem);
            total += item.price;
        });
        document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;

        if (cart.length > 0) {
            document.getElementById("cart").style.display = "block";
        } else {
            document.getElementById("cart").style.display = "none";
        }
    }
});
