<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class NanguPromoCustomer extends Model
{
    protected $fillable = [
        'subscriberCode',
        'ispCode',
        'subscriptionCode',
        'subscriptionStbAccountCode',
        'stb_serialNumber',
        'stb_macAddress',
        'pairingPin',
        'username',
        'password',
        'identityId',
        'customer_id',
        'isPassed'
    ];

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class, 'customer_id', 'id');
    }

    protected $casts = [
        'isPassed' => 'boolean',
    ];
}
