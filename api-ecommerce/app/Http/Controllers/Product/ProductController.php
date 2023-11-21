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

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function get_info()
     {
        $categories= Categories::orderBy("id", "desc")->get();
        $product_colors= ProductColor::orderBy("id", "desc")->get();
        $product_size= ProductSize::orderBy("id", "desc")->get();

        return response()->json([
            "categories"=>$categories,
            "product_colors"=>$product_colors,
            "product_size"=>$product_size,

        ]);
        

     }

     public function topfour(Request $request)
     {
          /**
      * /api/product/all?page=2
      */
 
       $search= $request->search;
       $category_id = $request->category_id;
       $products = Product::filterProduct($search, $category_id)->orderBy("id", "desc")->paginate(4);
 
       return response()->json([
         "message"=>200,
         "total"=>$products->total(),
         "products"=>ProductCollection::make($products)
       ]);
     }

    public function index(Request $request)
    {
         /**
     * /api/product/all?page=2
     */

      $search= $request->search;
      $category_id = $request->category_id;
      $products = Product::filterProduct($search, $category_id)->orderBy("id", "desc")->paginate(30);

      return response()->json([
        "message"=>200,
        "total"=>$products->total(),
        "products"=>ProductCollection::make($products)
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
        $is_product = Product::where("title", $request->title)->first();
        if($is_product){
            return response()->json(["message"=>403]);
        }

        $request->request->add(["slug"=>Str::slug($request->title)]);
        if($request->hasFile("images_file"))
        {
            $path = Storage::putFile("products", $request->file("images_file"));
            $request->request->add(["images"=>$path]);

        }
        $product = Product::create($request->all());

        foreach ($request->file("files") as $key=> $file){
            $extension=$file->getClientOriginalExtension();
            $size=$file->getSize();
            $oname=$file->getClientOriginalName();

            $path = Storage::putFile("products", $file);
            ProductImages::create([
                "product_id"=> $product->id,
                "file_name"=> $oname,
                "images"=>$path,
                "size"=>$size,
                "type"=>$extension,
            ]);


        }

        return response()->json(["message"=>200]);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::findOrFail($id);
        
        return response()->json([
            "product" =>ProductResource::make($product)
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

        $is_product = Product::where("id","<>",$id)->where("title", $request->title)->first();
        if($is_product){
            return response()->json(["message"=>403]);
        }

        $product = Product::findOrFail($id);

        $request->request->add(["slug"=>Str::slug($request->title)]);

        if($request->hasFile("images_file"))
        {
            $path = Storage::putFile("products", $request->file("images_file"));
            $request->request->add(["images"=>$path]);

        }
        $product->update($request->all());

        return response()->json(["message"=>200]);



       

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
