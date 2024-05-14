<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Printing Store</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="container">
            <img src="3dprintshop_logo.png" alt="3DPrintShop Logo">
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
    <main>
        <div class="container">
            <section class="products">
                <h2>Our Products</h2>
                <div class="product">
                    <img src="product1.jpg" alt="Product 1">
                    <h3>Product 1</h3>
                    <p>$10</p>
                    <button class="add-to-cart" data-id="1">Add to Cart</button>
                </div>
                <!-- Add more products similarly -->
            </section>
        </div>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2024 3D Printing Store</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>

/* Reset default margin and padding */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
}

.container {
    width: 90%;
    margin: 0 auto;
}

header {
    background-color: #131921;
    color: #fff;
    padding: 20px 0;
}

header img {
    width: 150px;
}

header nav ul {
    list-style-type: none;
}

header nav ul li {
    display: inline;
    margin-right: 20px;
}

header nav ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
}

main {
    padding: 20px 0;
}

.products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
}

.product {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
    padding: 20px;
}

.product img {
    width: 100%;
    max-width: 200px;
    height: auto;
    margin-bottom: 15px;
}

.product h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.product p {
    color: #555;
    margin-bottom: 15px;
}

.add-to-cart {
    background-color: #f0c14b;
    color: #111;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.add-to-cart:hover {
    background-color: #d3a513;
}

footer {
    background-color: #131a22;
    color: #fff;
    text-align: center;
    padding: 20px 0;
}
