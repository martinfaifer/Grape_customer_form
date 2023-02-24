<?php

namespace App\Http\Actions;

use App\Models\Customer;
use App\Actions\CreatePromoAction;

class StoreNewCustomerAction
{
    public function execute(array $formData): mixed
    {
        // try {
        $customer = Customer::create($formData);
        if ($formData['isPromo'] == true) {
            (new CreatePromoAction())->execute($customer->id);
            return (object) [
                'id' => $customer->id,
                'name' => $customer->name,
                'surname' => $customer->surname,
                'street' => $customer->street,
                'city' => $customer->city,
                'post_code' => $customer->post_code,
                'birthday' => $customer->birthday,
                'telephone' => $customer->telephone,
                'email' => $customer->email,
                'service' => $customer->service,
                'note' => $customer->note,
                'promo' => $customer->promo
            ];
        }

        return $customer;
        // } catch (\Throwable $th) {
        //     return false;
        // }
    }
}
