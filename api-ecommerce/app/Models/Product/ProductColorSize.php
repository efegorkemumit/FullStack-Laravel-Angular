<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductColorSize extends Model
{
    use SoftDeletes;
    protected $fillable = [
       'product_color_id', 
       'product_size_id', 
       'stock', 
     
    ];
    public function product_color()
    {
        return $this->belongsTo(ProductColor::class);
    }
    public function product_size()
    {
        return $this->belongsTo(ProductSize::class);
    }

}
