<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product\ProductImages;
use Illuminate\Support\Facades\Storage;

class ProductImagesContoller extends Controller
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
        $file = $request->file("file");
        if($request->hasFile("file"))
        {
            $extension=$file->getClientOriginalExtension();
            $size=$file->getSize();
            $oname=$file->getClientOriginalName();

            $path = Storage::putFile("products", $file);
            $images = ProductImages::create([
                "product_id"=> $request->product_id,
                "file_name"=> $oname,
                "images"=>$path,
                "size"=>$size,
                "type"=>$extension,
            ]);

            return response()->json([
                "images"=>
                [
                    "id"=> $images->id,
                    "file_name"=>$images->file_name,
                    "images" =>env("APP_URL")."/storage/".$images->images,
                    "size"=>$images->size,
                    "type"=>$images->type,



                ]
            
            ]);
            

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
       $images = ProductImages::findOrFail($id);
       if($images->images){
        
            Storage::delete($images->images);
       }
       $images->delete();
       return response()->json(["message"=>200]);
    }
}
