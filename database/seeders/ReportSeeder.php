<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('reports')->insert([
            [
                'title' => 'Rapport ventes Avril',
                'type' => 'Ventes',
                'file' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Rapport stock Mai',
                'type' => 'Stock',
                'file' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Rapport employés Q1',
                'type' => 'RH',
                'file' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
