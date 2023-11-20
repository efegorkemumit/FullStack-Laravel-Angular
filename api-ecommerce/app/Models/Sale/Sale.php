<?php

namespace App\Models\Sale;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;

class Sale extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'user_id', 
        'total', 
        'subtotal', 
       
     ];

     public function user()
     {
        return $this->belongsTo(User::class);

     }
     public function sale_address()
     {
        return $this->hasOne(SaleAddress::class);

     }
     public function sale_details()
     {
        return $this->hasMany(SaleDetail::class);

     }
     




}
