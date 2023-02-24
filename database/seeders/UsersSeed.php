<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UsersSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!User::whereEmail('admin@admin.com')->first()) {
            User::create([
                'name' => "admin",
                'email' => "admin@admin.com",
                'password' => bcrypt("1122334455"),
            ]);
        }
    }
}
