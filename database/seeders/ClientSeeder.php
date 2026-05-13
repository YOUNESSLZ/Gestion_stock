<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Client;
class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
            Client::create([
            'nom' => 'John Doe',
            'email' => 'client@example.com',
            'telephone' => '0612345678',
            'adresse' => '123 Rue de Paris, 75001 Paris, France',
        ]);
    }
}
