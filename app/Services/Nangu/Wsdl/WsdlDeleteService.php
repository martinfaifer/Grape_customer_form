<?php

namespace App\Services\Nangu\Wsdl;

class WsdlDeleteService
{

    public function execute(object $customer)
    {
        // wsdlConnect
        $soap = new ConnectWsdlService();
        // unassing identity
        $soap->connect(
            wsdl: "subscription",
            params: [
                'UnassignIdentity' =>
                [
                    "subscriptionStbAccountCode" => $customer->subscriptionStbAccountCode,
                    "identityId" => $customer->identityId,
                    "ispCode" => $customer->ispCode
                ]
            ],
            soap_call_parameter: "UnassignIdentity"
        );

        // delete identity
        $soap->connect(
            wsdl: "identity",
            params: [
                'Remove' =>
                [
                    "identityId" => $customer->identityId,
                    "ispCode" => $customer->ispCode
                ]
            ],
            soap_call_parameter: "Remove"
        );
        // delete subscription
        $soap->connect(
            wsdl: "subscription",
            params: [
                'Disable' =>
                [
                    "subscriptionCode" => $customer->subscriptionCode,
                    "ispCode" => $customer->ispCode
                ]
            ],
            soap_call_parameter: "Disable"
        );

        sleep(5);
        // delete subscriber
        $soap->connect(
            wsdl: "subscriber",
            params: [
                'Disable' =>
                [
                    "subscriberCode" => $customer->subscriberCode,
                    "ispCode" => $customer->ispCode
                ]
            ],
            soap_call_parameter: "Disable"
        );

        $customer->update([
            'isPassed' => true
        ]);
    }
}
