<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller
{
   
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
            return response()->json(['userCount'=>$userCount]);
        }
        
    }
}
