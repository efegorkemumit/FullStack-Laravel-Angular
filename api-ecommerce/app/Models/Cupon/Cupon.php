<?php

namespace App\Models\Cupon;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cupon extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'code',
        'type_discount',
        'discount',
        'type_count',
        'num_use',
        'categories',
        'products',
    ];
}
