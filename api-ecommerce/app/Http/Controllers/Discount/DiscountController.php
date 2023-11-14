<?php

namespace App\Http\Controllers\Discount;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Discount\Discount;
use App\Models\Discount\DiscountCategorie;
use App\Models\Discount\DiscountProduct;
use App\Http\Resources\Discount\DiscountCollection;
use App\Http\Resources\Discount\DiscountResource;

class DiscountController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search= $request->search;
        $discounts = Discount::where("code","like","%".$search."%")->orderBy("id", "desc")->get();
  
        return response()->json([
          "message"=>200,
          "discounts"=>DiscountCollection::make($discounts)
        ]);
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
        $product_array=[];
        $categorie_array=[];
        if($request->type==1){
            foreach($request->products_selected as $key =>$product)
            {
                array_push($product_array, $product["id"]);
            }
        }
        if($request->type==2){
            foreach($request->categories_selected as $key =>$categorie)
            {
                array_push($categorie_array, $categorie["id"]);
            }
        }
        $IS_EXISTE_START_DATE = Discount::ValidateDiscount($request, $product_array, $categorie_array)->whereBetween("start_date", [$request->start_date, $request->end_date])->first();
        $IS_EXISTE_END_DATE = Discount::ValidateDiscount($request, $product_array, $categorie_array)->whereBetween("end_date", [$request->start_date, $request->end_date])->first();

        if($IS_EXISTE_START_DATE ||  $IS_EXISTE_END_DATE)
        {
            return response()->json([
                "message"=>403,
                "message_text"=> "No register discount date"
              ]);

        }

          $request->request->add(["code"=> uniqid()]);
          $DISCOUNT = Discount::create($request->all());

          if($request->type == 1){

            foreach($product_array as $key => $product)
            {
                DiscountProduct::create([
                    "discount_id" => $DISCOUNT->id,
                    "product_id" => $product
                ]);

            }
          }
          if($request->type == 2){

            foreach($categorie_array as $key => $categorie)
            {
                DiscountCategorie::create([
                    "discount_id" => $DISCOUNT->id,
                    "categorie_id" => $categorie
                ]);

            }
          }

          return response()->json(["messaga"=>200, "discount" => $DISCOUNT]);
  
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $discount = Discount::findOrFail($id);
        
        return response()->json([
            "discount" =>DiscountResource::make($discount)
        ]);
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
        $product_array=[];
        $categorie_array=[];
        if($request->type==1){
            foreach($request->products_selected as $key =>$product)
            {
                array_push($product_array, $product["id"]);
            }
        }
        if($request->type==2){
            foreach($request->categories_selected as $key =>$categorie)
            {
                array_push($categorie_array, $categorie["id"]);
            }
        }
        $IS_EXISTE_START_DATE = Discount::ValidateDiscount($request, $product_array, $categorie_array)->whereBetween("start_date", [$request->start_date, $request->end_date])->first();
        $IS_EXISTE_END_DATE = Discount::ValidateDiscount($request, $product_array, $categorie_array)->whereBetween("end_date", [$request->start_date, $request->end_date])->first();


      

          $DISCOUNT = Discount::findOrFail($id);
          $DISCOUNT->update($request->all());

          if($request->type == 1){

            foreach($product_array as $key => $product)
            {
                DiscountProduct::create([
                    "discount_id" => $DISCOUNT->id,
                    "product_id" => $product
                ]);

            }
          }
          if($request->type == 2){

            foreach($categorie_array as $key => $categorie)
            {
                DiscountCategorie::create([
                    "discount_id" => $DISCOUNT->id,
                    "categorie_id" => $categorie
                ]);

            }
          }

          return response()->json(["messaga"=>200, "discount" => $DISCOUNT]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
       $discount = Discount::findOrFail($id);
      
       $discount->delete();
       return response()->json(["message"=>200]);
    }
}
