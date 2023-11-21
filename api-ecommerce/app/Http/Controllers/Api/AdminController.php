<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Sale\Sale;
use App\Models\Product\Product;

class AdminController extends Controller
{

        // List All Users (GET)
    public function listUsers(Request $request)
    {
        $userdata = auth()->user();

        if($userdata->is_admin == "1"){
          
            $search = $request ->input('search');
            $query = User::query();

            if($search)
            {
                $query->where('name','like', '%' .$search. '%')
                ->orWhere('email','like', '%' .$search. '%');
            }
            $users = $query->get();
            
            return response()->json([
                "status"=> true,
                "messages"=> "Users",
                "data" => $users
            ]);
        }
        else{
            return response()->json([
                "status"=> false,
                "messages"=> "Unauthorized",
            ], 401);

        }


    }

    public function getUser($userId)
    {
        $userdata = auth()->user();

        if($userdata->is_admin == "1"){
            $user = User::find($userId);
            if($user){
                return response()->json([
                    "status"=> true,
                    "messages"=> "Users Profile",
                    "data" => $user
                ]);

            }else
            {
                return response()->json([
                    "status"=> false,
                    "messages"=> "User not found",
                ], 404);

            }

           
        }
        else{
            return response()->json([
                "status"=> false,
                "messages"=> "Unauthorized",
            ], 401);

        }



        
    }

    public function deleteUser($userId)
    {
        $userdata = auth()->user();

        if($userdata->is_admin == "1"){
            $user = User::find($userId);
            if(!$user){
                return response()->json([
                    "status"=> true,
                    "messages"=> "User not found",
                ]);

            }

            $user->delete();

           
        }
        else{
            return response()->json([
                "status"=> false,
                "messages"=> "Unauthorized",
            ], 401);

        }


    }

    public function updateUser(Request $request, $id)
    {
        $userdata = auth()->user();

        if($userdata->is_admin == "1"){
            $user = User::find($id);
            if(!$user){
                return response()->json([
                    "status"=> false,
                    "messages"=> "user not found",
                ], 404);
            }

            $request->validate([
                "name"=>"required",
                "email"=>"required|email|unique:users,email," . $user->id,
                "is_admin"=>"required|boolean"

            ]);

            $user->name = $request->name;
            $user->email= $request->email;
            $user->is_admin= $request->is_admin;
            $user->save();

            return response()->json([
                "status"=> false,
                "messages"=> "user update",
                "data"=> $user
            ]);


            

           
        }
        else{
            return response()->json([
                "status"=> false,
                "messages"=> "Unauthorized",
            ], 401);

        }


    }
   
   
    public function getLastUsers()
    {
        $userdata = auth()->user();

        if($userdata->is_admin == "1"){
           
            $latestUsers = User::latest()->take(5)->get();
            return response()->json(['latest_user'=>$latestUsers]);
        }

    }

    public function getUsersCount(){

        $userdata = auth()->user();

        if($userdata->is_admin == "1"){
           
            $userCount = User::count();
            $ProductCount = Product::count();
            $SaleCount = Sale::count();
            return response()->json([
                'userCount'=>$userCount,
                'ProductCount'=>$ProductCount,
                'SaleCount'=>$SaleCount,
            
            ]);
        }
        
    }
}
