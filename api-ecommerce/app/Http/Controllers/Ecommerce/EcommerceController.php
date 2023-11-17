<?php

namespace App\Http\Controllers\Ecommerce;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Extra\Slider;
use App\Models\Product\Categories;
use App\Models\Product\Product;
use App\Http\Resources\Ecommerce\ProductEcomResource;

class EcommerceController extends Controller
{
    public function home(){

      $categories = Categories::orderBy("id","desc")->get();
      //  $slider = Slider::orderBy("id","desc")->get();
        $products_a = Product::inRandomOrder()->limit(4)->get();
        $products_b = Product::inRandomOrder()->limit(12)->get();


        return response()->json([
       //     "slider"=>$slider,
           "categories"=>$categories,
            "product_a"=>$products_a->map(function($product){
                return ProductEcomResource::make($product);
            }),
            "product_b"=>$products_b->map(function($product){
                return ProductEcomResource::make($product);
            })
        ]);




    }


    public function pdetail(string $id)
    {
        $product = Product::findOrFail($id);
        $products_a = Product::inRandomOrder()->limit(4)->get();

        
        return response()->json([
            "product_a"=>$products_a->map(function($product){
                return ProductEcomResource::make($product);
            }),
            "product" =>ProductEcomResource::make($product)
        ]);
    }
}
