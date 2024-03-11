<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart</title>
    <link rel="stylesheet" href="{{ asset('css/cart-page.css') }}">
    <link href='https://fonts.googleapis.com/css?family=Archivo' rel='stylesheet'>
</head>
<body>
    <nav>
        <div class="left">
            <img src="{{ asset('image/logo.svg') }}" alt="logo">
        </div>
        <div class="right">
            <a href="#">My Cart</a>
            <a href="#">History</a>
            <a href="#">Top up</a>
            <a href="/login">Back</a>
        </div>
    </nav>
    <!-- ini kalau kosong -->
    {{-- <div class="midd">
        <img src="{{ asset('image/cartt.png') }}" alt="cart">
        <p>The cart is empty right now ! I think we should fill it !</p>
        <a href="/home" class="button">Add Product</a>
    </div>  --}}

    <div class="mid">
        <div class="box">
            <input type="checkbox" class="item-checkbox">
            <img src="{{ asset('image/demo-image.png') }}" alt="Product 1" class="product-image">
            <div class="product-details">
                <h3 class="product-name">High Collar Wool Sweater</h3>
                <p class="product-description">Sweater berbahan lembut dan premium dari katun original asli...Sweater berbahan l</p>
                <p class="product-price">Rp 899.000</p>
                <div class="box-product-quantity">
                    <button class="button min">-</button>
                    <input type="number" class="product-quantity" value="1">
                    <button class="button plus">+</button>
                </div>
            </div>
            <img src="{{ asset('image/trashbin.png') }}" alt="Trashbin" class="trashbin-icon">
        </div>
        <div class="box">
            <input type="checkbox" class="item-checkbox">
            <img src="{{ asset('image/demo-image.png') }}" alt="Product 1" class="product-image">
            <div class="product-details">
                <h3 class="product-name">High Collar Wool Sweater</h3>
                <p class="product-description">Swe</p>
                <p class="product-price">Rp 899.000</p>
                <div class="box-product-quantity">
                    <button class="button min">-</button>
                    <input type="number" class="product-quantity" value="1">
                    <button class="button plus">+</button>
                </div>
            </div>
            <img src="{{ asset('image/trashbin.png') }}" alt="Trashbin" class="trashbin-icon">
        </div>
        <div class="box">
            <input type="checkbox" class="item-checkbox">  
            <img src="{{ asset('image/demo-image.png') }}" alt="Product 1" class="product-image">
            <div class="product-details">
                <h3 class="product-name">High Collar Wool Sweater</h3>
                <p class="product-description">Swe</p>
                <p class="product-price">Rp 899.000</p>
                <div class="box-product-quantity">
                    <button class="button min">-</button>
                    <input type="number" class="product-quantity" value="1">
                    <button class="button plus">+</button>
                </div>
            </div>
            <img src="{{ asset('image/trashbin.png') }}" alt="Trashbin" class="trashbin-icon">
        </div>
    </div>
    <div class="footer">
        <div class="left">
            <input type="checkbox" class="select-all">
            <p>Select All</p>            
        </div>
        <div class="checkout">
            <p class="error-message">No products selected!</p>
            <a href="#" class="checkout-button check"> <!-- go to transaction page-->
                Checkout (     <span class="item-count">0</span>)
            </a>
        </div>
    </div>
    <script src="{{ asset('js/cart-page.js') }}"></script>
</body>
</html>