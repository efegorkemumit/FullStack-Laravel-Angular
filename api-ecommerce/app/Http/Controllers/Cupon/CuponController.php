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
        $IS_VALID = Cupon::where("code", $request->code)->first();
            if($IS_VALID){
                return response()->json(["message"=>403, "message_text"=>"Cupon dont use "]);
            }

        if($request->type_cupon==1)
        {
            $products=[];
            foreach($request->products_selected as $key =>$product){
                array_push($products,$product["id"]);
            }
            // [2,3,4 ] => 2,3,4
            $request->request->add(["products"=>implode(",",$products)]);

        }

        if($request->type_cupon==2)
        {
            $categories=[];
            foreach($request->categories_selected as $key =>$categorie){
                array_push($categories,$categorie["id"]);
            }
            // [2,3,4 ] => 2,3,4
            $request->request->add(["categories"=>implode(",",$categories)]);

        }
        Cupon::create($request->all());
        return response()->json(["message"=>200]);
        
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
        $IS_VALID = Cupon::where("id","<>,$id")->where("code", $request->code)->first();
        if($IS_VALID){
            return response()->json(["message"=>403, "message_text"=>"Cupon dont use "]);
        }

    if($request->type_cupon==1)
    {
        $products=[];
        foreach($request->products_selected as $key =>$product){
            array_push($products,$product["id"]);
        }
        // [2,3,4 ] => 2,3,4
        $request->request->add(["products"=>implode(",",$products)]);

    }

    if($request->type_cupon==2)
    {
        $categories=[];
        foreach($request->categories_selected as $key =>$categorie){
            array_push($categories,$categorie["id"]);
        }
        // [2,3,4 ] => 2,3,4
        $request->request->add(["categories"=>implode(",",$categories)]);

    }

    $cupon = Cupon::findOrFail($id);
    $cupon->update($request->all());
    return response()->json(["message"=>200]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $cupon = Cupon::findOrFail($id);
        $cupon->delete();
        return response()->json([
            "message"=>200,
        ]);
    }
}
