<?php

namespace App\Http\Actions;

use App\Models\Customer;

class StoreNewCustomerAction
{
    public function execute(array $formData): Customer| bool
    {
        try {
            return Customer::create($formData);
        } catch (\Throwable $th) {
            return false;
        }
    }
}
