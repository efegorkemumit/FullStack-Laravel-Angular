<?php

namespace App\Http\Controllers\Ecommerce;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Extra\Slider;
use App\Models\Product\Categories;

class EcommerceController extends Controller
{
    public function home(){

        $categories = Categories::orderBy("id","desc")->get();
        $slider = Slider::orderBy("id","desc")->get();
        return response()->json([
            "slider"=>$slider,
            "categories"=>$categories,
        ]);


    }
}
