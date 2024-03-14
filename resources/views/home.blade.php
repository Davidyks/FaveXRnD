<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce</title>
    <link rel="stylesheet" href="{{ asset('css/home.css') }}">
</head>
<body>
    <!-- loading animation -->
    <div class="loader">
        <img src="{{ asset('image/Union.svg') }}" alt="Loading...">
        <div>Hold on, we're getting there!</div>
    </div>
    <!-- ----------------- -->

    <header class="head" id="header">
        <nav class="nav-container1">
                <a href="#men" class="active">Men</a>
                <a href="#women">Women</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                
            </nav>
        <img class="logo" src="{{ asset('image/Union.svg') }}" alt="" href="/home">
        <nav class="nav-container2">
          @if(!Auth::user())
          <a href="/login" target="_self">Login</a>
          @else
            <form action="/logout" method="post">
              @csrf
            <button type="submit">Logout</button>
          </form>
          <a href="/cart">Wishlist(0)</a>
          <a href="/cart">Cart(0)</a>
          @endif
        </nav>
    </header>

    <div>
        <br>
        <br>
    </div>

    <section class="Home" id="home">
        <main class="intro">
            <img class="left" src="{{ asset('image/splashleft.svg') }}" alt="">
            <img class="right" src="{{ asset('image/splashright.svg') }}" alt="">
            <p class="slogan">Quality meets style 
            <br>with feline fitnesse.</br>
            </p>
            <p class="desc">Our Garments, Woven with Whiskered <br>Precision and Hat-tastic Flair, Promise a <br>Purmanence of Quality and Durability.</p>
            <img class="arrow" src="{{ asset('image/arrowtest.svg') }}" alt="">
        </main>
    </section>

    <div id="men"><br></div><div id="women"><br></div>
            
            <div class="gender">
                <button class="men" type="button">Men</button>
                <button class="women" type="button">Women</button>
            </div>

            <div class="types">
              <form action="{{ route('search') }}" method="GET">
                  <button class="text" name="category" value="all">All</button>
                  <button class="text" name="category" value="sweatshirt">Sweatshirts</button>
                  <button class="text" name="category" value="knit">Knitwear</button>
                  <button class="text" name="category" value="polo shirt">Polo Shirts</button>
                  <button class="text" name="category" value="t shirt">T-shirts</button>
                  <button class="text" name="category" value="shirt">Shirts</button>
                  <button class="text" name="category" value="trouser">Trousers</button>
                  <button class="text" name="category" value="hat">Hats</button>
              </form>
          </div>

    <div class="sale">
        <span>On Sale</span><img class="img" src="{{ asset('image/percent.svg') }}" alt="">
    </div>

    <section class="sale-container">
        <div class="content">
          @foreach ($onsales as $onsale)
            <div class="sweatshirt">
                <img class="imgSweat" src="storage/{{ $onsale->picture }}" alt="">
                <div class="words">
                    <p class="text2">{{ $onsale->name }}</p>
                    <span class="price">Rp {{ $onsale->price }}</span> <span class="diskon">Rp {{ $onsale->price * 90 / 100 }}</span>
                    <br><img class="color" src="{{ asset('image/colors.svg') }}" alt="">
                </div>
            </div>
            @endforeach
        </div>
        
    </section>


    <div class="sale">
        <span>Newest Product</span>
    </div>

    <section class="sale-container">
        <div class="content">
          @foreach ($newests as $newest)
            <div class="sweatshirt">
                <img class="imgSweat" src="storage/{{ $newest->picture }}" alt="">
                <div class="words">
                    <p class="text2">{{ $newest->name }}</p>
                    <span class="diskon2">Rp {{ $newest->price }}</span>
                    <br><img class="color" src="{{ asset('image/colors.svg') }}" alt="">
                </div>
            </div>    
          @endforeach
        </div>
        
    </section>

    <div class="sale">
        <span>Other Product</span>
    </div>

    <section class="sale-container">
        <div class="content">
          @foreach ($others as $other)
            <div class="sweatshirt">
                <img class="imgSweat" src="storage/{{ $other->picture }}" alt="">
                <div class="words">
                    <p class="text2">{{ $other->name }}</p>
                    <span class="diskon2">Rp {{ $other->price }}</span>
                    <br><img class="color" src="{{ asset('image/colors.svg') }}" alt="">
                </div>
            </div>      
          @endforeach
        </div>
    </section>
    <img src="{{ asset('image/arrow2.svg') }}" alt="Union Image" class="arrow2">

    <!-- HEADER-------------------------------- -->
    <footer class="footer">
        <div class="container">
            <img src="{{ asset('image/Unionlight.svg') }}" alt="logo" class="logoFooter">
            <div class="row">
                <div class="footer-col1">
                    <h4 class="slog"><p>The clothing</p>
                        <p>brand for cats</p>
                        <p>with hats.</p>
                    </h4>
                </div>
                <div class="footer-col">
                    <h4 class="north">North America</h4>
                    <p class="email"><a href = "mailto:catclothingemail@gmail.com">catclothingemail@gmail.com</a></p>
                    <div class="info">
                        <p class="num">+1 (555) 123-4567</p>
                        <p class="address">123 Main Street <p>Cityville, CA 90210 <p>United States</p></p></p>
                        <h3><a href="">See on Map</a></h3>
                    </div>
                </div>
                <div class="footer-col">
                    <h4 class="south">South America</h4>
                    <div class="info">
                        <p class="email"><a href = "mailto:catclothingemail@gmail.com">catclothingemail@gmail.com</a></p>
                        <p class="num">+55 123 456 7890</p>
                        <p class="address">456 Rio Avenue    <p>Sambatown, SA 12345
                            <p>Brazil</p></p></p>
                        <h3><a href="">See on Map</a></h3>
                    </div>
                </div>
                <div class="footer-col">
                    <h4 class="socials">Our Socials</h4>
                    <p class="icons">
                        <img class="i" src="{{ asset('image/insta.svg') }}" alt="">
                        <img class="i" src="{{ asset('image/facebook.svg') }}" alt="">
                        <img class="i" src="{{ asset('image/twitter.svg') }}" alt="">
                        
                    </p>
                    <p class="icons">
                        <img class="i" src="{{ asset('image/mail.svg') }}" alt="">
                        <img class="i" src="{{ asset('image/phone.svg') }}" alt="">
                    </p>
                    
                </div>
            </div>
        </div>
        <div class="credit">
            <h2>Crafted with perfection, absolutely zero flaws, and an absurd level of finesse that breaks the space-time continuum by <span>FAVE Solution</span></h2>
        </div>
    </footer>

    <script src="{{ asset('js/home.js') }}"></script>
</body>
</html>