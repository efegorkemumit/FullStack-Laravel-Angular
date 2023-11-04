<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImages extends Model
{
    protected $fillable = [
        'image', 
        'type', 
        'size', 
        'file_name',
        
        
      
     ];

     public function product()
     {
         return $this->belongsTo(Product::class);
     }

}
