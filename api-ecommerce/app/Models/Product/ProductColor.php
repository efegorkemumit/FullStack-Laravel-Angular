<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductColor extends Model
{
    use SoftDeletes;
    protected $fillable = [
       'name', 
       'code', 
      
     
    ];

    public function product_color_sizes()
    {
        return $this->hasMany(ProductColorSize::class);
    }


}
