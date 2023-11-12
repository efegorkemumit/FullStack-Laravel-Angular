<?php

namespace App\Http\Controllers\Cupon;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cupon\Cupon;
use App\Models\Product\Categories;
use App\Models\Product\Product;

class CuponController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->search;
        $cupons = Cupon::where("code","like","%".$search."%")->orderBy("id","desc")->get();
        return response()->json([
            "message"=>200,
            "cupons"=>$cupons,
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

    public function config_all()
     {
        $categories= Categories::orderBy("id", "desc")->get();
        $products= Product::orderBy("id", "desc")->get();

        return response()->json([
            "message"=>200,
            "categories"=>$categories,
            "products"=>$products,

        ]);
        

     }

    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $cupon = Cupon::findOrFail($id);
        
        return response()->json([
            "message"=>200,
            "cupon" =>$cupon
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
