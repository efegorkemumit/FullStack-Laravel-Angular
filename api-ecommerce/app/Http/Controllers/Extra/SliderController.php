<?php

namespace App\Http\Controllers\Extra;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Extra\Slider;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->search;
        $slider = Slider::where("title","like","%".$search."%")->orderBy("id","desc")->get();
        return response()->json([
            "slider"=>$slider,
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
            $path= Storage::putFile("slider", $request->file("images_file"));
            $request->request->add(["images"=>$path]);
       }
       $slider = Slider::create($request->all());
       return response()->json([
            "slider"=>$slider,
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
    public function edit(string $id)
    {
        //
    }

    public function getSlider($id)
    {
        $slider = Slider::find($id);
            if($slider){
                return response()->json([
                    "status"=> true,
                    "messages"=> "Slider",
                    "data" => $slider
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
        $slider= Slider::findOrFail($id);
        if($request->hasFile("images_file"))
         {
            if($slider->images)
            {
                Storage::delete($slider->images);
                
            }

            $path= Storage::putFile("slider", $request->file("images_file"));
            $request->request->add(["images"=>$path]);
         }
       $slider -> update($request->all());
       return response()->json([
            "slider"=>$slider,
       ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $userdata = auth()->user();

        if($userdata->is_admin == "1"){
            $slider = Slider::findOrFail($id);
            $slider->delete();

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
