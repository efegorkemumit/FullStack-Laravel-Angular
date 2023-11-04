<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductSize extends Model
{
    use SoftDeletes;
    protected $fillable = [
       'product_id', 
       'name', 
       
      
     
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function product_size_colors()
    {
        return $this->hasMany(ProductColorSize::class);
    }

}
