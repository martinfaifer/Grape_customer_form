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
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name')->index();
            $table->string('surname')->index();
            $table->string('street')->index();
            $table->string('city')->index();
            $table->string('post_code')->nullable();
            $table->string('birthday')->nullable();
            $table->string('telephone')->nullable();
            $table->string('email')->nullable();
            $table->string('service')->nullable();
            $table->longText('note')->nullable();
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
        Schema::dropIfExists('customers');
    }
};
