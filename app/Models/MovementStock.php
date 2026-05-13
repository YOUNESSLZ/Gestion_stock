<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MovementStock extends Model
{
      protected $fillable = ['idUser', 'idProduit', 'typeMovement', 'quantite', 'dateMovement'];

    public function user() {
        return $this->belongsTo(User::class, 'idUser');
    }

    public function product() {
        return $this->belongsTo(Product::class, 'idProduit');
    }
}
