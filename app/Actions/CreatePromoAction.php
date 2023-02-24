<?php

namespace App\Actions;

use App\Models\NanguPromoCustomer;
use App\Services\Nangu\Wsdl\WsdlAssignIdentityService;
use App\Services\Nangu\Wsdl\WsdlCreateIdentityService;
use App\Services\Nangu\Wsdl\WsdlCreateSubscriberService;
use App\Services\Nangu\Wsdl\WsdlCreateSubscriptionService;
use App\Services\Nangu\Wsdl\WsdlEnableSubscriptionService;

class CreatePromoAction
{
    public string $promoPrefix = "promo_";

    public function execute(null|int $customerId = null)
    {
        // create new promo customer and show logins
        $subscriberCode = (new WsdlCreateSubscriberService())->execute($customerId);
        $subscriptionCode = (new WsdlCreateSubscriptionService())->execute($subscriberCode);
        $identityId = (new WsdlCreateIdentityService())->execute($subscriberCode);
        (new WsdlAssignIdentityService())->execute($subscriberCode);
        (new WsdlEnableSubscriptionService())->execute($subscriberCode);

        return NanguPromoCustomer::where('subscriberCode', $subscriberCode)->first();
    }
}
