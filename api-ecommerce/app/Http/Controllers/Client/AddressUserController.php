<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client\AddressUser;

class AddressUserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $address= AddressUser::where("user_id", auth('api')->user()->id)->orderBy("id", "desc")->get();
       return response()->json([
        "address"=> $address
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
        $request->request->add(["user_id"=>auth("api")->user()->id]);
        $address = AddressUser::create($request->all());
        return response()->json([
            "message"=>200,
            "address"=> $address
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

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
      
        $address = AddressUser::findOrFail($id);
        $address->update($request->all());
        return response()->json([
            "message"=>200,
            "address"=> $address
           ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $address = AddressUser::findOrFail($id);
        $address->delete();
        return response()->json([
            "message"=>200
           ]);
    }
}
