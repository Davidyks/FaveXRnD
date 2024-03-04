<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="{{ asset('css/register.css') }}">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
    <div id="screen">
    <div id="top">
        <img id="logo" src="{{ asset('image/logo.svg') }}" alt="logo">
        <h1 class="heading">Register</h1><br><br>
        <p>Create an account in a second, just like snapping your finger!</p>
    </div><br><br><br><br>
    
    <form id="form" action="{{ route('register') }}" method="POST">
        @csrf
        <div>
            <label for="">Name</label><br><br>
            <input oninput="validateName()" id="name" class="input" name="name" type="text" placeholder="Please enter your name..." value="{{ old('name') }}">
            <p id="error-name" class="error-message"></p>
        </div>

        <div>
            <label for="">Email</label><br><br>
            <input oninput="validateEmail()" type="email" id="email" name="email" class="input" placeholder="Please enter your email address..." value="{{ old('email') }}">
            <p id="error-email" class="error-message"></p>
        </div>

        <div>
            <label for="">Address</label><br><br>
            <input oninput="validateAlamat()" id="alamat" class="input" name="address" rows="5" placeholder="Please enter your address..." value="{{ old('address') }}">
            <p id="error-alamat" class="error-message"></p>
        </div>
        
        <div>
            <label for="">Phone Number</label><br><br>
            <input oninput="validateNumber()" id="number" class="input" name="phone_number" type="text" name="telp" placeholder="Please enter your phone number..." value="{{ old('phone_number') }}">
            <p id="error-number" class="error-message"></p>
            <br>
        </div>

        <div>
            <label for="">Day of Birth</label><br><br>
            <input oninput="validateBday()" type="date" class="input" name="birth_date" id="bday" value="{{ old('birth_date') }}">
            <p id="error-bday" class="error-message"></p>
        </div>

        <div>
            <label for="">Password</label><br><br>
            <input oninput="validatePassword()" class="input" type="password" name="password" id="password" placeholder="Please enter your password..." value="{{ old('password') }}">
            <p id="error-password" class="error-message"></p>
        </div><br><br>

        <button id="send-btn" class="heading" type="submit">Register</button>
        
    </form><br><br>

    <div id="bottom">
        <p>You already have an account?</p>
        <a href="/login">Login here</a>
    </div>
</div>

    <script src="{{ asset('js/register.js') }}"></script>
</body>
</html>