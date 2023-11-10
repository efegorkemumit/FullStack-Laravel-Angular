<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product\Product;
use App\Models\Product\Categories;
use App\Models\Product\ProductColor;
use App\Models\Product\ProductColorSize;
use App\Models\Product\ProductSize;
use App\Models\Product\ProductImages;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;

class ProductSizeColorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if(!$request->product_size_id)
        {
            $product_size_color = ProductSize::where("name", $request->new_name)->first();
            if($product_size_color){
                return response()->json(
                    ["message"=>403, 
                    "text_message"=>"Product size name error"
                ]);
            }
            $product_size = ProductSize::create([
                "product_id"=>$request->product_id,
                "name"=>$request->new_name,
            ]);
        }
        else
        {
            $product_size = ProductSize::findOrFail($request->product_size_id);
        }

        $product_size_color =ProductColorSize::where("product_color_id", $request->product_color_id)->where("product_size_id",$product_size->id)->first();
        if($product_size_color){
            return response()->json(
                ["message"=>403, 
                "text_message"=>"name error"
            ]);
        }

        $product_size_color = ProductColorSize::create([
            "product_color_id" => $request->product_color_id,
            "product_size_id" => $product_size->id,
            "stock" => $request->stock,

        ]);

        return response()->json(["message"=>200, "product_color_size"=>[
            "id"=>$product_size->id,
            "name"=>$product_size->name,
            "total"=>$product_size->product_size_colors->sum("stock"),
            "variant"=> $product_size->product_size_colors->map(function($var){
                return[
                    "id" => $var->id,
                    "product_color_id" => $var->product_color_id,
                    "product_color" => $var->product_color,
                    "stock" => $var->stock,
                    




                ];


            }),





        ]]);



    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product_size = ProductColorSize::findOrFail($id);
        $product_size->delete();
        return response()->json(["message"=>200]);
    }

    public function destroy_size($id)
    {
        $product_size = ProductSize::findOrFail($id);
        $product_size->delete();
        return response()->json(["message"=>200]);
    }
}
