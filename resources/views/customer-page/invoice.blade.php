<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo&display=swap">
    <link rel="stylesheet" href="{{ asset('css/invoice.css') }}">
</head>
<body>
    <div class="container">
        <img src="{{ asset('image/Union (3).png') }}" alt="Logo" class="logo" width="50px" height="50px" style="margin-left: 35px;">
        <div class="top-up-button">History</div>
        <div class="back-button">Back</div>
    </div>
    <div class="history-page">
        <img src="{{ asset('image/iconamoon_invoice-fill.png') }}" alt="">
        <h1>No transactions have made ! Probably filled by you soon !</h1>
    </div>
</body>
</html>