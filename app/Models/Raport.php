<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Raport extends Model
{
    use HasFactory;

    // Table name (optional if it matches plural of model)
    protected $table = 'reports';

    // Mass assignable fields
    protected $fillable = [
        'title',
        'type',
        'file',
    ];
}
