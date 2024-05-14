<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Printing Store</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px 20px;
            text-align: center;
        }
        nav {
            background-color: #555;
            padding: 10px 20px;
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
        .product {
            border: 1px solid #ccc;
            padding: 20px;
            margin-bottom: 20px;
            overflow: hidden;
        }
        .product img {
            max-width: 100%;
            height: auto;
        }
        .product h2 {
            margin-top: 0;
        }
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 20px;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>3D Printing Store</h1>
    </header>
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="container">
        <section id="home">
            <h2>Welcome to our 3D Printing Store!</h2>
            <p>We offer a wide range of 3D printed products for you to explore and purchase.</p>
        </section>
        <section id="about">
            <h2>About Us</h2>
            <p>We are passionate about 3D printing and strive to provide high-quality products to our customers.</p>
        </section>
        <section id="products">
            <h2>Our Products</h2>
            <div class="product">
                <img src="product1.jpg" alt="Product 1">
                <h2>Product 1</h2>
                <p>Description of Product 1</p>
                <p>$19.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="product">
                <img src="product2.jpg" alt="Product 2">
                <h2>Product 2</h2>
                <p>Description of Product 2</p>
                <p>$24.99</p>
                <button>Add to Cart</button>
            </div>
            <!-- Add more products as needed -->
        </section>
        <section id="contact">
            <h2>Contact Us</h2>
            <p>Email: destinycontractingllc@example.com</p>
        </section>
    </div>
    <footer>
        <p>&copy; 2024 3D Printing Store. All rights reserved.</p>
    </footer>
</body>
</html>
