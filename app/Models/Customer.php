<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = [
        'name',
        'surname',
        'street',
        'city',
        'post_code',
        'birthday',
        'telephone',
        'email',
        'service',
        'note'
    ];
}
