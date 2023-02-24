<?php

namespace App\Services\Nangu\Wsdl;

use App\Models\NanguPromoCustomer;

class WsdlCreateSubscriptionService
{
    public function execute(string $subscriberCode)
    {
        $ispCode = 1;
        $subscriptionCode = $subscriberCode . "1";

        (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'Create' =>
                [
                    "subscriberCode" => $subscriberCode,
                    "subscriptionCode" => $subscriptionCode,
                    "subscriptionStbAccountCode" => $subscriptionCode,
                    "currencyCode" => "CZK",
                    "tariffCode" => "obchod",
                    "localityCode" => "hls-kdekoliv",
                    "ispCode" => $ispCode
                ]
            ],
            soap_call_parameter: "Create"
        );

        NanguPromoCustomer::where('subscriberCode', $subscriberCode)->update([
            'subscriptionCode' => $subscriptionCode,
            'subscriptionStbAccountCode' => $subscriptionCode
        ]);

        return $subscriptionCode;
    }
}
