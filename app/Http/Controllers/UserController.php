<?php

namespace App\Http\Controllers;

use App\Actions\StoreUserAction;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UserPasswordRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    public function index()
    {
        return User::get();
    }

    public function store(StoreUserRequest $request, StoreUserAction $storeUserAction): array
    {
        return $storeUserAction->execute($request->name, $request->email, $request->password) == true
            ? [
                'status' => "success",
                'message' => "Založeno"
            ]
            : [
                'status' => "error",
                'message' => "Nepodařilo se založit záznam"
            ];
    }

    public function update_password(UserPasswordRequest $request)
    {
        try {
            $user = Auth::user();
            $user->update([
                'password' => bcrypt($request->password)
            ]);

            return [
                'status' => "success",
                'message' => "Změněno"
            ];
        } catch (\Throwable $th) {
            return [
                'status' => "error",
                'message' => "Nepodařilo se změnit záznam"
            ];
        }
    }

    public function password()
    {
        $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        $pass = array();
        $alphaLength = strlen($alphabet) - 1;
        for ($i = 0; $i < 10; $i++) {
            $n = rand(0, $alphaLength);
            $pass[] = $alphabet[$n];
        }
        return implode($pass);
    }

    public function destroy(User $user)
    {
        if (Auth::user()->id == $user->id) {
            return abort(403);
        }
        return $user->delete();
    }
}
