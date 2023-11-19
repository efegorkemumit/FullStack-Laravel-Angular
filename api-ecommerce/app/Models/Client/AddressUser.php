<?php

namespace App\Models\Client;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AddressUser extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'user_id', 
        'full_name', 
        'full_surname', 
        'company_name', 
        'country', 
        'city',
        'zip_code', 
        'phone', 
        'email'
    ];

    public function user()
    {

        return $this->belongsTo(User::class);
    }

     
}
