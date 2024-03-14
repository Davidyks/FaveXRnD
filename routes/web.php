<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TopUpController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'getHomePage']);

Route::get('/home', [HomeController::class, 'getHomePage']);

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/cart', function(){
        return view('customer-page.cart-page');
    });
    
    Route::get('/transaction', function(){
        return view('customer-page.transaction-page');
    });
    
    Route::get('/invoice', function(){
        return view('customer-page.invoice');
    });
    
    Route::get('/invoice-filled', function(){
        return view('customer-page.invoice-filled');
    });
    Route::get('/top-up', [TopUpController::class, 'goToTopUpPage']);

    Route::post('/post-top-up', [TopUpController::class, 'topUp']);
});

require __DIR__.'/auth.php';

Route::get('/admin-panel', [AdminController::class, 'goToAdminPanel'])->middleware('auth', 'role:admin');

Route::post('/admin-store-product', [AdminController::class, 'store']);

Route::post('/admin-update-product-{id}', [AdminController::class, 'update']);

Route::delete('/admin-delete-product-{id}', [AdminController::class, 'delete']);

Route::get('/search', [HomeController::class, 'search'])->name('search');

Route::get('/back', function(){
    return redirect()->back();
});









