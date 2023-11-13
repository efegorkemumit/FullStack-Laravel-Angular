<?php

namespace App\Models\Discount;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiscountProduct extends Model
{
    protected $fillable = [
        'discount_id',
        'product_id',
       
    ];

    public function discount()
    {
        return $this->belongsTo(Discount::class);
    }

    public function categorie()
    {
        return $this->belongsTo(Product::class);
    }
}
