<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product\Categories;
use App\Models\User;
use Illuminate\Support\Facades\Storage;


class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->search;
        $categories = Categories::where("name","like","%".$search."%")->orderBy("id","desc")->get();
        return response()->json([
            "categories"=>$categories,
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
       if($request->hasFile("images_file")){
            $path= Storage::putFile("categories", $request->file("images_file"));
            $request->request->add(["images"=>$path]);
       }
       $categories = Categories::create($request->all());
       return response()->json([
            "categories"=>$categories,
       ]);
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
    public function getCategory($id)
    {
        $categories = Categories::find($id);
            if($categories){
                return response()->json([
                    "status"=> true,
                    "messages"=> "Categories",
                    "data" => $categories
                ]);

            }else
            {
                return response()->json([
                    "status"=> false,
                    "messages"=> "User not found",
                ], 404);

            }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $categories= Categories::findOrFail($id);
        if($request->hasFile("images_file"))
         {
            if($categories->images)
            {
                Storage::delete($categories->images);
                
            }

            $path= Storage::putFile("categories", $request->file("images_file"));
            $request->request->add(["images"=>$path]);
         }
       $categories -> update($request->all());
       return response()->json([
            "categories"=>$categories,
       ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $userdata = auth()->user();

        if($userdata->is_admin == "1"){
            $categories = Categories::findOrFail($id);
            $categories->delete();

            return response()->json(["message"=>200]);

           
        }
        else{
            return response()->json([
                "status"=> false,
                "messages"=> "Unauthorized",
            ], 401);

        }

    }
}
