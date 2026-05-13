<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('commande_product', function (Blueprint $table) {
              $table->id();
              $table->foreignId('commande_id')->constrained('commandes')->cascadeOnDelete();
              $table->foreignId('product_id')->constrained('products')->cascadeOnDelete();
              $table->integer('quantite');
              $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commande_product');
    }
};
