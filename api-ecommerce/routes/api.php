<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Product\CategoriesController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\Product\ProductImagesContoller;
use App\Http\Controllers\Product\ProductSizeColorController;
use App\Http\Controllers\Extra\SliderController;
use App\Http\Controllers\Cupon\CuponController;
use App\Http\Controllers\Discount\DiscountController;
use App\Http\Controllers\Ecommerce\EcommerceController;
use App\Http\Controllers\Cart\CartController;
use App\Http\Controllers\Client\AddressUserController;
use App\Http\Controllers\Sale\SalesController;


// ECOMMERCE START

Route::get("home", [EcommerceController::class, "home"]);
Route::get("detail/{id}", [EcommerceController::class, "pdetail"]);
Route::group(["middleware" => ["auth:api"]], function(){

    Route::get("Ecommerce/cart", [CartController::class, "index"]);
    Route::post("Ecommerce/cart/add", [CartController::class, "store"]);
    Route::post("Ecommerce/cart/update/{id}", [CartController::class, "update"]);
    Route::delete("Ecommerce/cart/delete/{id}", [CartController::class, "destroy"]);
    Route::get("Ecommerce/applycupon/{cupon}", [CartController::class, "apply_cupon"]);

// Client START
    Route::get("Client/address", [AddressUserController::class, "index"]);
    Route::post("Client/address/add", [AddressUserController::class, "store"]);
    Route::post("Client/address/update/{id}", [AddressUserController::class, "update"]);
    Route::delete("Client/address/delete/{id}", [AddressUserController::class, "destroy"]);

/// Sale

    Route::post("Client/checkout", [SalesController::class, "store"]);
    Route::get("orders/all", [SalesController::class, "index"]);
    Route::get("topfoursale/all", [SalesController::class, "topfour"]);


});

Route::get("login", function(){
    return response()->json(['message'=>'Unauthenticated'],401);

})->name('login');


// ECOMMERCE END

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


// CATEGORY

Route::group(["middleware" => ["api"]], function(){
    Route::get("category/all", [CategoriesController::class, "index"]);
});

Route::group(["middleware" => ["auth:api"]], function(){
    Route::delete("category/{id}", [CategoriesController::class, "destroy"]);
    Route::post("category/add", [CategoriesController::class, "store"]);
    Route::post("category/update/{id}", [CategoriesController::class, "update"]);
    Route::get("category/detail/{id}", [CategoriesController::class, "getCategory"]);

});

// PRODUCT

Route::group(["middleware" => ["api"]], function(){
    Route::get("product/all", [ProductController::class, "index"]);
    Route::get("topfour/all", [ProductController::class, "topfour"]);

    Route::get("product/get_info", [ProductController::class, "get_info"]);
    Route::get("product/show_product/{id}", [ProductController::class, "show"]);
});

Route::group(["middleware" => ["auth:api"]], function(){
    Route::post("product/add", [ProductController::class, "store"]);
    Route::post("product/update/{id}", [ProductController::class, "update"]);
});

Route::group(["middleware" => ["auth:api"]], function(){
    Route::post("product/img/add", [ProductImagesContoller::class, "store"]);
    Route::delete("product/img/delete/{id}", [ProductImagesContoller::class, "destroy"]);
});

Route::group(["middleware" => ["auth:api"]], function(){
    Route::post("product/sizecolor/add", [ProductSizeColorController::class, "store"]);
    Route::delete("product/size/delete/{id}", [ProductSizeColorController::class, "destroy_size"]);
    Route::delete("product/color/delete/{id}", [ProductSizeColorController::class, "destroy"]);

});

// SLIDER

Route::group(["middleware" => ["api"]], function(){
    Route::get("slider/all", [SliderController::class, "index"]);
});

Route::group(["middleware" => ["auth:api"]], function(){
    Route::delete("slider/{id}", [SliderController::class, "destroy"]);
    Route::post("slider/add", [SliderController::class, "store"]);
    Route::post("slider/update/{id}", [SliderController::class, "update"]);
    Route::get("slider/detail/{id}", [SliderController::class, "getSlider"]);

});


// CUPON

Route::group(["middleware" => ["api"]], function(){
    Route::get("cupons/all", [CuponController::class, "index"]);
    Route::get("cupons/config-all", [CuponController::class, "config_all"]);
    Route::get("cupons/show/{id}", [CuponController::class, "show"]);
});

Route::group(["middleware" => ["auth:api"]], function(){
    Route::post("cupons/add", [CuponController::class, "store"]);
    Route::post("cupons/update/{id}", [CuponController::class, "update"]);

    Route::delete("cupons/delete/{id}", [CuponController::class, "destroy"]);


});

// DISCOUNT
Route::group(["middleware" => ["api"]], function(){
    Route::get("discount/all", [DiscountController::class, "index"]);
    Route::get("discount/show_discount/{id}", [DiscountController::class, "show"]);


});

Route::group(["middleware" => ["auth:api"]], function(){
    Route::delete("discount/delete/{id}", [DiscountController::class, "destroy"]);
    Route::post("discount/add", [DiscountController::class, "store"]);
    Route::post("discount/update/{id}", [DiscountController::class, "update"]);

});
