<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nangu_promo_customers', function (Blueprint $table) {
            $table->id();
            $table->string('subscriberCode')->unique()->index();
            $table->string('ispCode')->index();
            $table->string('subscriptionCode')->nullable()->unique();
            $table->string('subscriptionStbAccountCode')->nullable()->unique();
            $table->string('stb_serialNumber')->unique()->nullable()->index();
            $table->string('stb_macAddress')->unique()->nullable()->index();
            $table->string('pairingPin')->nullable();
            $table->string('username')->nullable();
            $table->string('password')->nullable();
            $table->string('identityId')->nullable()->unique()->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nangu_promo_customers');
    }
};
