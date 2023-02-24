<?php

namespace App\Services\Nangu\Wsdl;

use App\Actions\GenerateSubscriberCodeAction;
use App\Models\NanguPromoCustomer;

class WsdlCreateSubscriberService
{
    public function execute(null|int $customerId = null)
    {
        $subscriberCode = (new GenerateSubscriberCodeAction())->execute();
        $ispCode = 1;

        $wsdlResponse = (new ConnectWsdlService())->connect(
            wsdl: "subscriber",
            params: [
                'Create' =>
                [
                    "subscriberCode" => $subscriberCode,
                    'ispCode' => $ispCode
                ]
            ],
            soap_call_parameter: "Create"
        );

        NanguPromoCustomer::create([
            'subscriberCode' => $subscriberCode,
            'ispCode' => 1,
            'customer_id' => $customerId
        ]);

        return $subscriberCode;
    }
}
