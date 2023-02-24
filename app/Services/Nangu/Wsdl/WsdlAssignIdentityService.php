<?php

namespace App\Services\Nangu\Wsdl;

use App\Models\NanguPromoCustomer;

class WsdlAssignIdentityService
{
    public function execute(string $subscriberCode)
    {
        $ispCode = 1;
        $nanguCustomer = NanguPromoCustomer::where('subscriberCode', $subscriberCode)->first();
        (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'AssignIdentity' =>
                [
                    "subscriptionStbAccountCode" => $nanguCustomer->subscriptionStbAccountCode,
                    "identityId" => $nanguCustomer->identityId,
                    "ispCode" => $ispCode
                ]
            ],
            soap_call_parameter: "AssignIdentity"
        );
    }
}
