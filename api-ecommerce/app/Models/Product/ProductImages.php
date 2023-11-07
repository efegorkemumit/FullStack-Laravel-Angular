<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImages extends Model
{
    protected $fillable = [
        'images', 
        'type', 
        'size', 
        'file_name',
        'product_id'
        
        
      
     ];

     public function product()
     {
         return $this->belongsTo(Product::class);
     }

}
