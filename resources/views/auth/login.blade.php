<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="{{ asset('css/login.css') }}">
</head>
<body>
    <div id="top">
        <img id="logo" src="{{ asset('image/logo.svg') }}" alt="logo">
        <h1 class="heading">Login</h1><br><br>
    </div><br><br><br><br>
    
    <form id="form" action="{{ route('login') }}" method="POST">
      @csrf
        <div>
            <label for="">Email</label><br><br>
            <input name="email" type="text" id="email" class="input" placeholder="Please enter your email address..." autofocus autocomplete="username">
        </div><br>

        <div>
            <label for="">Password</label><br><br>
            <input name="password" class="input" type="password" id="password" placeholder="Please enter your password..." autofocus autocomplete="current-password">
        </div><br>

        @if($errors->any())
            <p class="error-message">Invalid login or password. Please try again.</p>
        @endif
        <br>

        <button id="send-btn" class="heading" type="submit">Login</button>
        
    </form><br><br>

    <div id="bottom">
        <p>You don't have an account?</p>
        <a href="/register">Register here</a>
    </div>

</body>
</html>