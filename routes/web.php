<?php

use App\Http\Controllers\SubmitNewCustomerController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});


Route::post('customer', SubmitNewCustomerController::class);
