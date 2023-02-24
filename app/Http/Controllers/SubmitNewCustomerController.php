<?php

namespace App\Http\Controllers;

use App\Http\Actions\StoreNewCustomerAction;
use App\Http\Requests\NewCustomerRequest;
use App\Jobs\SendCustomerDataJob;
use Illuminate\Http\Request;

class SubmitNewCustomerController extends Controller
{
    public function __invoke(NewCustomerRequest $request, StoreNewCustomerAction $storeNewCustomerAction)
    {
        $customerStoreActionResponse =  $storeNewCustomerAction->execute($request->validated());
        if ($customerStoreActionResponse == false) {
            return [
                'status' => "error",
                'message' => "Nepodařilo se připojit klienta do DB"
            ];
        }

        // odeslání emailu
        SendCustomerDataJob::dispatch($customerStoreActionResponse);
        return [
            'status' => "success",
            'message' => "Vytvořeno, email bude brzy odeslán",
            'data' => $customerStoreActionResponse
        ];
    }
}
