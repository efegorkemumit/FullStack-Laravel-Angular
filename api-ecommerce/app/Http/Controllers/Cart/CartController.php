<?php

namespace App\Http\Controllers\Cart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart\CartShop;
use App\Http\Resources\Cart\CartshopCollection;
use App\Http\Resources\Cart\CartshopResource;
use App\Models\Product\ProductColorSize;
use App\Models\Product\Product;


class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $carts = CartShop::where("user_id",auth('api')->user()->id)->orderBy("id","desc")->get();
        return response()->json(["carts"=>CartshopCollection::make($carts)]);
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

        if($request->product_color_size_id)
        {
            $validate_cart_shop= CartShop::where("product_id", $request->product_id)
                                          ->where("product_size_id", $request->product_size_id)
                                          ->where("product_color_size_id", $request->product_color_size_id)
                                          ->first();
            if($validate_cart_shop)
            {
                return response()->json(["message"=>403,
                                         "message_text"=>" Product error"]);
            }

        }else
        {
            $validate_cart_shop= CartShop::where("product_id", $request->product_id)->first();
            if($validate_cart_shop)
            {
                return response()->json(["message"=>403,
                                         "message_text"=>" Product error 2"]);
            }
        }

        if($request->product_color_size_id)
        {
            $color_size = ProductColorSize::findOrFail($request->product_color_size_id);
            if($color_size->stock < $request->quantity)
            {
                return response()->json(["message"=>403,
                              "message_text"=>" Product quantitiy error"]);
            }

        }
        else
        {
            $product = Product::findOrFail($request->product_id);
            if($product->stock < $request->quantity)
            {
                return response()->json(["message"=>403,
                              "message_text"=>" Product quantitiy error 2"]);
            }

        }

        $cart_shop = CartShop::create($request->all());
        return response()->json(["message"=>200, "cart_shop"=>CartshopResource::make($cart_shop)]);


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
        if($request->product_color_size_id)
        {
            $validate_cart_shop= CartShop::where("id","<>", $id)
                                          ->where("product_id", $request->product_id)
                                          ->where("product_size_id", $request->product_size_id)
                                          ->where("product_color_size_id", $request->product_color_size_id)
                                          ->first();
            if($validate_cart_shop)
            {
                return response()->json(["message"=>403,
                                         "message_text"=>" Product error"]);
            }

        }else
        {
            $validate_cart_shop= CartShop::where("id","<>", $id)
                                         ->where("product_id", $request->product_id)->first();
            if($validate_cart_shop)
            {
                return response()->json(["message"=>403,
                                         "message_text"=>" Product error 2"]);
            }
        }

        if($request->product_color_size_id)
        {
            $color_size = ProductColorSize::findOrFail($request->product_color_size_id);
            if($color_size->stock < $request->quantity)
            {
                return response()->json(["message"=>403,
                              "message_text"=>" Product quantitiy error"]);
            }

        }
        else
        {
            $product = Product::findOrFail($request->product_id);
            if($product->stock < $request->quantity)
            {
                return response()->json(["message"=>403,
                              "message_text"=>" Product quantitiy error 2"]);
            }

        }

        $cart_shop = CartShop::findOrFail($id);
        $cart_shop-> update($request->all());
        return response()->json(["message"=>200, "cart_shop"=>CartshopResource::make($cart_shop)]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $cart_shop = CartShop::findOrFail($id);
        $cart_shop-> delete();
        return response()->json(["message"=>200,]);

    }
}
