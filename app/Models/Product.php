<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['categorie_id', 'nom', 'description', 'prix', 'quantiteStock', 'seuilAlert', 'photo'];

    public function categorie() {
        return $this->belongsTo(Categorie::class, 'categorie_id');
    }

    public function fournisseur() {
        return $this->belongsTo(Fournisseur::class, 'idFournisseur');
    }

    public function movements() {
        return $this->hasMany(MovementStock::class, 'idProduit');
    }
}
