<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Product\CategoriesController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\Extra\SliderController;

Route::post("register", [ApiController::class, "register"]);
Route::post("login", [ApiController::class, "login"]);
Route::post("admin_login", [ApiController::class, "adminlogin"]);

Route::group(["middleware" => ["auth:api"]], function(){

    Route::get("profile", [ApiController::class, "profile"]);
    Route::get("refresh", [ApiController::class, "refreshToken"]);
    Route::get("logout", [ApiController::class, "logout"]);
});

Route::group(["middleware" => ["auth:api"]], function(){

    Route::get("admin/users/latest", [AdminController::class, "getLastUsers"]);
    Route::get("admin/users/count", [AdminController::class, "getUsersCount"]);
    Route::get("admin/users", [AdminController::class, "listUsers"]);
    Route::get("admin/users/{id}", [AdminController::class, "getUser"]);
    Route::put("admin/users/update/{id}", [AdminController::class, "updateUser"]);
    Route::delete("admin/users/delete/{id}", [AdminController::class, "deleteUser"]);
});

Route::group(["middleware" => ["api"]], function(){
    Route::get("category/all", [CategoriesController::class, "index"]);
});

Route::group(["middleware" => ["auth:api"]], function(){
    Route::delete("category/{id}", [CategoriesController::class, "destroy"]);
    Route::post("category/add", [CategoriesController::class, "store"]);
    Route::post("category/update/{id}", [CategoriesController::class, "update"]);
    Route::get("category/detail/{id}", [CategoriesController::class, "getCategory"]);

});

Route::group(["middleware" => ["api"]], function(){
    Route::get("product/all", [ProductController::class, "index"]);
});

Route::group(["middleware" => ["auth:api"]], function(){
    Route::post("product/add", [ProductController::class, "store"]);
});


Route::group(["middleware" => ["api"]], function(){
    Route::get("slider/all", [SliderController::class, "index"]);
});

Route::group(["middleware" => ["auth:api"]], function(){
    Route::delete("slider/{id}", [SliderController::class, "destroy"]);
    Route::post("slider/add", [SliderController::class, "store"]);
    Route::post("slider/update/{id}", [SliderController::class, "update"]);
    Route::get("slider/detail/{id}", [SliderController::class, "getSlider"]);

});
