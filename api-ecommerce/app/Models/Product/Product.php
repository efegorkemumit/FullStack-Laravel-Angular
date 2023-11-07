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
       'images', 
       'stock', 
       'category_id'
      
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

    public function scopeFilterProduct($query, $search, $category_id)
    {
        if($search){
            $query->where('title', 'like', "%$search%");
        }
        if($category_id){
            $query->where('category_id', $category_id);

        }
        return $query;
    }

}
