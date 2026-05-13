<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->string('action'); // e.g., "Added product", "Deleted product"
            $table->string('description');
            $table->string('user_name');
            $table->unsignedBigInteger('user_id');
            $table->string('model_type')->nullable(); // e.g., "Product", "User"
            $table->unsignedBigInteger('model_id')->nullable(); // ID of the affected record
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('activities');
    }
};