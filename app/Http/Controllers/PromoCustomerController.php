<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Actions\CreatePromoAction;
use App\Models\NanguPromoCustomer;
use App\Http\Controllers\Controller;
use App\Services\Nangu\Wsdl\WsdlAssignIdentityService;
use App\Services\Nangu\Wsdl\WsdlCreateIdentityService;
use App\Services\Nangu\Wsdl\WsdlCreateSubscriberService;
use App\Services\Nangu\Wsdl\WsdlCreateSubscriptionService;
use App\Services\Nangu\Wsdl\WsdlEnableSubscriptionService;

class PromoCustomerController extends Controller
{

    /**
     * vygenerování a uložení uživatele do db a do nanguTV
     *
     * Odeslání zpet informaci o pristupech do App's
     *
     * @return void
     */
    public function __invoke(CreatePromoAction $createPromoAction)
    {
        return $createPromoAction->execute();
    }
}
