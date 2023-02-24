<?php

namespace App\Actions;

use App\Jobs\UserWelcomeJob;
use App\Models\User;

class StoreUserAction
{
    public function execute(string $name, string $email, string $password): bool
    {
        try {
            User::create([
                'name' => $name,
                'email' => $email,
                'password' => bcrypt($password)
            ]);

            UserWelcomeJob::dispatch($email, $password);

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
