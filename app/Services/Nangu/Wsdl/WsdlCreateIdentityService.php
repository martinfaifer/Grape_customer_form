<?php

namespace App\Services\Nangu\Wsdl;

use App\Models\NanguPromoCustomer;

class WsdlCreateIdentityService
{
    /**
     * create new identity
     */
    public function execute(string $subscriberCode)
    {
        $ispCode = 1;

        $identityId = (new ConnectWsdlService())->connect(
            wsdl: "identity",
            params: [
                'Create' =>
                [
                    "master" => true,
                    "username" => $subscriberCode,
                    "password" => $subscriberCode,
                    "pairingPin" => mt_rand(1000000000, 9999999999),
                    "ispCode" => $ispCode
                ]
            ],
            soap_call_parameter: "Create"
        );

        NanguPromoCustomer::where('subscriberCode', $subscriberCode)->update([
            'identityId' => $identityId['identityId'],
        ]);

        return $identityId['identityId'];
    }
}
