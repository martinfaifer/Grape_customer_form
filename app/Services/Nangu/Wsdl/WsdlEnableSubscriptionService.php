<?php

namespace App\Services\Nangu\Wsdl;

use App\Models\NanguPromoCustomer;

class WsdlEnableSubscriptionService
{
    public function execute(string $subscriberCode)
    {
        $ispCode = 1;
        $nanguCustomer = NanguPromoCustomer::where('subscriberCode', $subscriberCode)->first();
        $response = (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'Enable' =>
                [
                    "subscriptionCode" => $nanguCustomer->subscriptionCode,
                    "subscriptionStbAccountCode" => $nanguCustomer->subscriptionStbAccountCode,
                    "puk" => implode(':', str_split(substr(md5(mt_rand()), 0, 12), 2)),
                    "ispCode" => $ispCode
                ]
            ],
            soap_call_parameter: "Enable"
        );

        return $response;
    }
}
