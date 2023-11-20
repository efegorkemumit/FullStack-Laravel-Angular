<?php

namespace App\Models\Sale;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class SaleAddress extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'sale_id', 
        'full_name', 
        'full_surname', 
        'company_name', 
        'country', 
        'city',
        'zip_code', 
        'phone', 
        'email'
       
     ];


    public function sale()
    {
       return $this->belongsTo(Sale::class);

    }

}
