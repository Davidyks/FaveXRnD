<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart</title>
    <link rel="stylesheet" href="{{ asset('css/transaction-page.css') }}">
    <link href='https://fonts.googleapis.com/css?family=Archivo' rel='stylesheet'>
</head>
<body>
    <nav>
        <div class="left">
            <img src="{{ asset('image/logo.svg') }}" alt="logo">
        </div>
        <p style="font-family: 'Noto Serif', serif; font-size: 40px; font-weight: 600;">Order</p>
        <div class="right">
            <a href="/cart">Back</a>
        </div>
    </nav>
    <div class="mid">
        <div class="leftt">
            <div class="box">
                <img src="{{ asset('image/demo-image.png') }}" alt="Product 1" class="product-image">
                <div class="product-details">
                    <h3 class="product-name">High Collar Wool Sweater</h3>
                    <p class="product-description">Sweater berbahan lembut dan premium dari katun original asli...Sweater berbahan l</p>
                    <p class="product-price">Rp 899.000</p>
                </div>
                <p class="quantity-item">x1</p>
            </div>
            <div class="box">
                <img src="{{ asset('image/demo-image.png') }}" alt="Product 1" class="product-image">
                <div class="product-details">
                    <h3 class="product-name">High Collar Wool Sweater</h3>
                    <p class="product-description">Swe</p>
                    <p class="product-price">Rp 899.000</p>
                </div>
                <p class="quantity-item">x1</p>
            </div>
            <div class="box">
                <img src="{{ asset('image/demo-image.png') }}" alt="Product 1" class="product-image">
                <div class="product-details">
                    <h3 class="product-name">High Collar Wool Sweater</h3>
                    <p class="product-description">Swe</p>
                    <p class="product-price">Rp 899.000</p>
                </div>
                <p class="quantity-item">x1</p>
            </div>
        </div>
        
        <div class="rightt">
            <div class="container">
                <div class="title-container">
                    <img src="{{ asset('image/location.png') }}" alt="">
                    <h2>Destination</h2>
                </div>
                <div class="destination">
                    <input type="text" maxlength="25" id="destination" name="destination" placeholder="Enter destination">
                    <br> <br>
                    <input type="text" id="destination-desc" name="destination-desc" placeholder="Enter description" style="color: #392A2A; opacity: 60%;">
                    
                    <!-- Add input fields for editing destination -->
                </div>
            </div>

            <div class="container">
                <div class="title-container">
                    <h2>Shipment</h2>
                </div>
                <div class="shipping">
                    <div class="shipping-option" style="display: flex; justify-content: space-between;">
                        <div class="shipping-optionn" style="display: flex;">
                            <input type="radio" id="instant" name="shipping" value="instant">
                            <p>Instant</p>
                        </div>
                        <p class="price">Rp 20.000</p>
                    </div>
                    <p style="color: #392A2A; opacity: 60%; margin-left: 25px;">Estimation: 1 day<br>Max Quantity: 5 items</p>
                    <div class="shipping-option" style="display: flex; justify-content: space-between;">
                        <div class="shipping-optionn" style="display: flex;">
                            <input type="radio" id="regular" name="shipping" value="regular">
                            <p>Regular</p>
                            
                        </div>
                        <p class="price">Rp 10.000</p>
                    </div>
                    <p style="color: #392A2A; opacity: 60%; margin-left: 25px;">Estimation: 3 days<br>Max Quantity: 5 items</p>
                </div>
            </div>

            <div class="container" style="display: flex;">
                <div style="display: flex;">
                    <img src="{{ asset('image/price.png') }}" alt="">
                    <p>Total Price (<span style="opacity: 60%;"><span class="item-count">0</span> Products/s</span>)</p>
                </div>
                    <p class="total-price"></p>
            </div>

            <div class="container" style="display: flex;">
                <div style="display: flex;">
                    <img src="{{ asset('image/emoney.png') }}" alt="">
                    <p>E-money: <span class="e-money"></span></p>
                    <p class="error-text" style="opacity: 60%;"></p>
                </div>
                <div class="top-up">
                    <a href="/top-up" class="top-up-button check">Top Up</a>
                </div>
            </div>
            
            <div class="container">
                <div class="title-container">
                    <img src="{{ asset('image/payment.png') }}" alt="">
                    <h2>Payment Details</h2>
                </div>
                <div class="payment-details">
                    <div style="display: flex; justify-content: space-between; opacity: 60%;">
                        <p>Product/s</p>
                        <p class="product-price-detail"></p>
                    </div>
                    <div style="display: flex; justify-content: space-between; opacity: 60%;">
                        <p>Shipping</p>
                        <p class="shipping-price-detail"></p>
                    </div>
                    <br>
                    <div style="display: flex; justify-content: space-between; font-size: larger;">
                        <p>Total Price</p>
                        <p class="total-price-detail"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="order">
            <p class="error-message">Not Enough Balance!</p>
            <a href="/berhasil" class="order-button check">Make Order</a>
        </div>
    </div>
    <script src="{{ asset('js/transaction-page.js') }}"></script>
    <script src="{{ asset('js/cart-page.js') }}"></script>
</body>
</html>