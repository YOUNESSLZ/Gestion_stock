<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {


        User::create([
            'name' => 'youness',
            'email' => 'youness.lazrak05@gmail.com',
            'password' => Hash::make('123'),
            'role' => 'admin',
            'estActif' => true,
            'estValide' => true,
            'photo' => null,
        ]);
        User::create([
            'name' => 'ouwayss',
            'email' => 'ouwayss.lazrak05@gmail.com',
            'password' => Hash::make('456'),
            'role' => 'employee',
            'estActif' => true,
            'estValide' => true,
            'photo' => null,
        ]);

        User::create([
            'name' => 'zineb',
            'email' => 'zineb.lazrak05@gmail.com',
            'password' => Hash::make('789'),
            'role' => 'employee',
            'estActif' => false,
            'estValide' => true,
            'photo' => null,
        ]);
        User::create([
            'name' => 'mmm',
            'email' => 'mmm.lazrak05@gmail.com',
            'password' => Hash::make('888'),
            'role' => 'employee',
            'estActif' => true,
            'estValide' => false,
            'photo' => null,
        ]);
    }
}
