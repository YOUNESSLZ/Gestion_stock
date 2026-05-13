<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\MovementStock;
class MovementStockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
            MovementStock::create([
            'user_id' => 1,
            'product_id' => 1,
            'type' => 'entrée',
            'quantite' => 10,
            'dateMovement' => now(),
        ]);
    }
}
