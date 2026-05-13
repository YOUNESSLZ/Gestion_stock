<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
      protected $fillable = ['nom', 'description', 'photo'];

    public function products() {
        return $this->hasMany(Product::class, 'idCategorie');
    }
}
