<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/top-up.css') }}">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <img src="{{ asset('image/Union (3).png') }}" alt="Logo" class="logo" width="50px" height="50px" style="margin-left: 35px;">
        <div class="top-up-button">Top Up</div>
        <div class="back-button">Back</div>
    </div>
    <form action="/post-top-up" method="POST">
      @csrf
    <div class="additional-box">
    <div class="balance-box">
        <div class="pass-box">
            <p>Hallo, {{ $user->name }} </p>
            <div class="pess-box">
                <a href="mailto:{{ $user->email }}">{{ $user->email }}</a>
                <p>{{ $user->phone_number }}</p>
            </div>
            <div class="threes-box">
                <div class="second-box">
                    <p>Balance <span class="toggle-visibility-container"><button class="toggle-visibility" data-target="balance">👁️</button></span></p>
                    <p class="balance-amount-placeholder">Rp<span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span></p>
                    <p class="balance-amount" style="display: none;">Rp {{ $user->e_money }}</p>
                </div>
                <div class="third-box">
                    <p>Monthly Income <button class="toggle-visibility" data-target="income">👁️</button></p>
                    <p class="income-amount-placeholder">Rp<span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span></p>
                    <p class="income-amount" style="display: none;">Rp 5.000.000</p>
                </div>
                <div class="fourth-box">
                    <p>Monthly Outcome <button class="toggle-visibility" data-target="outcome">👁️</button></p>
                    <p class="outcome-amount-placeholder">Rp<span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span><span class="bullet">&bull;</span></p>
                    <p class="outcome-amount" style="display: none;">Rp 2.000.000</p>
                </div>
            </div>
        </div>
    </div>
    <div class="amount-box">
        <p>Choose Top Up Method</p>
        <span class="bullat">
            &bull; <img src="{{ asset('image/Mask group (1).png') }}" alt="">
            <span class="method-text" style="font-size: 20px; color: #392A2A;">Debit Card</span>
        </span>
        <span class="bullat">
            &bull; <img src="{{ asset('image/mingcute_transfer-line.png') }}" alt="">
            <span class="method-text" style="font-size: 20px; color: #392A2A;">Bank Transfer</span>
        </span>
        <p style="margin-top: 2px;">Select Amount</p>
        <div class="cuan-box">
            <div class="box">
                <img src="{{ asset('image/healthicons_money-bag.png') }}" alt="">
                <p>Rp 19.000</p>
            </div>
            <div class="box">
                <img src="{{ asset('image/healthicons_money-bag.png') }}" alt="">
                <p>Rp 49.000</p>
            </div>
            <div class="box">
                <img src="{{ asset('image/healthicons_money-bag.png') }}" alt="">
                <p>Rp 99.000</p>
            </div>
        </div>
        <div class="cuan2-box">
            <div class="box">
                <img src="{{ asset('image/healthicons_money-bag.png') }}" alt="">
                <p>Rp 199.000</p>
            </div>
            <div class="box">
                <img src="{{ asset('image/healthicons_money-bag.png') }}" alt="">
                <p>Rp 249.000</p>
            </div>
            <div class="box">
                <img src="{{ asset('image/healthicons_money-bag.png') }}" alt="">
                <p>Rp 499.000</p>
            </div>
        </div>
        <div class="type-box">
            <input type="text" placeholder="Or type an amount here">
        </div>
        <div class="end-box">
            <div class="end1-box">
                <h1>Cost(Admin Fee : Rp 1.000)</h1>
            </div>
            <div class="end2-box">
                <h2>Rp {{ $user->e_money }}</h2>
            </div>
    </div>
    </div>
</div>
    <div class="additional-element">
        <!-- Content for the additional element -->
    </div>
    <div class="top-up-method">
        <button class="top-up" type="submit" style="width: 100px; height: 50px;">Top Up</button>
    </div>
  </form>
    <script src="{{ asset('js/top-up.js') }}"></script>
</body>
</html>