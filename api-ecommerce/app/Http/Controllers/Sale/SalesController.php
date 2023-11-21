<?php

namespace App\Http\Controllers\Sale;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sale\Sale;
use App\Models\Sale\SaleAddress;
use App\Models\Sale\SaleDetail;
use App\Models\Cart\CartShop;
use App\Http\Resources\Sale\SaleCollection;

class SalesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $orders = Sale::orderBy("id","desc")->get();

       return response()->json([
        "message"=>200,
        "orders"=>new SaleCollection($orders)
       ]);
    }

    public function topfour(Request $request)
     {
          /**
      * /api/product/all?page=2
      */

      $orders = Sale::orderBy("id","desc")->limit(4)->get();

       return response()->json([
        "message"=>200,
        "orders"=>new SaleCollection($orders)
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
        $sale = Sale::create($request->sale);
        
        $sale_address= $request->sale_address;
        $sale_address["sale_id"]=$sale->id;
        $sale_address=SaleAddress::create($sale_address);

        $cartshop = CartShop::where("user_id",auth('api')->user()->id)->get();

        foreach($cartshop as $key =>$cart){
            $sale_detail = $cart->toArray();
            $sale_detail["sale_id"] = $sale->id;
            SaleDetail::create($sale_detail);


            $cart->delete();
        }
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
    public function destroy(string $id)
    {
        //
    }
}
