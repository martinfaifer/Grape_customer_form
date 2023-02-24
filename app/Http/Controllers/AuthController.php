<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Actions\Auth\LoginAction;

class AuthController extends Controller
{
    public function login(LoginRequest $request, LoginAction $loginAction)
    {
        if ($loginAction->execute($request) == true) {
            return $this->success(null, "Přihlášeno");
        }

        return $this->error("Neplatné přihlašovací údaje");
    }

    public function logout()
    {
        Auth::logout();
        return $this->success(null, "Odhlášeno");
    }

    public function show()
    {
        return Auth::user();
    }
}
