<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $fillable = [
        'action',
        'description',
        'user_name',
        'user_id',
        'model_type',
        'model_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}