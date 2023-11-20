<?php

namespace App\Models\Sale;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;
use App\Models\Product\Product;
use App\Models\Product\ProductSize;
use App\Models\Product\ProductColorSize;


class SaleDetail extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'sale_id',
        'product_id',
        'type_discount',
        'discount',
        'quantity',
        'product_size_id',
        'product_color_size_id',
        'code_cupon',
        'code_discount',
        'unit_price',
        'subtotal',
        'total',
    ];


    public function sale()
    {
       return $this->belongsTo(Sale::class);

    }
    
    public function client()
    {
        return $this->belongsTo(User::class, "user_id");
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
    public function product_size()
    {
        return $this->belongsTo(ProductSize::class);
    }
    public function product_color_size()
    {
        return $this->belongsTo(ProductColorSize::class);
    }


}
