<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\PromoCustomerController;
use App\Http\Controllers\SubmitNewCustomerController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

Route::prefix('login')->group(function () {
    Route::get('', function () {
        return redirect("/#/login");
    })->name('login');

    Route::post('', [AuthController::class, 'login']);
});


Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get("user/logged", [AuthController::class, 'show']);

    Route::post('customer', SubmitNewCustomerController::class);

    Route::post('customer/promo', PromoCustomerController::class);

    Route::get('customers', CustomerController::class);

    Route::prefix("users")->group(function () {
        Route::get("", [UserController::class, 'index']);
        Route::post("", [UserController::class, 'store']);
        Route::patch("password", [UserController::class, 'update_password']);
        Route::get('password', [UserController::class, 'password']);
        Route::delete("{user}", [UserController::class, 'destroy']);
    });
});
