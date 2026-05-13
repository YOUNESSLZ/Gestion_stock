<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
        public function client() {
        return $this->belongsTo(Client::class);
    }

    public function products() {
        return $this->belongsToMany(Product::class, 'commande_product')
                    ->withPivot('quantite')
                    ->withTimestamps();
    }
}
