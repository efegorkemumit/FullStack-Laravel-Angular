<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Product extends Model
{
    use SoftDeletes;
    protected $fillable = [
       'title', 
       'slug', 
       'sku', 
       'price_dsc',
       'price_usd',
       'tags', 
       'description',
       'summary', 
       'state', 
       'image', 
       'stock', 
       'created_at', 
       'updated_at', 
       'deleted_at'
    ];

    public function categories()
    {
        return $this->belongsTo(Categories::class);
    }

    public function images()
    {
        return $this->hasMany(ProductImages::class);
    }

    public function sizes()
    {
        return $this->hasMany(ProductSize::class);
    }

}
