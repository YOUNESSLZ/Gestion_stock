<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       Product::create([
            'categorie_id' => 1,
            'nom' => 'Produit Exemple',
            'description' => 'Description du produit exemple',
            'prix' => 99.99,
            'quantiteStock' => 50,
            'seuilAlert' => 10,
            'photo' => null,
        ]);
    }
}
