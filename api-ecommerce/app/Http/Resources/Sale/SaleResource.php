<?php

namespace App\Http\Resources\Sale;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SaleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return
        [
            "id"=>$this->resource->id,
            "user"=>[
                "id"=>$this->resource->user->id,
                "name"=>$this->resource->user->name,
            ],
            "total"=>$this->resource->total,
            "subtotal"=>$this->resource->subtotal,
            "items"=>$this->resource->sale_details->map(function($detail){
                return[
                    "id"=>$detail->id,
                    "title"=>$detail->product->title,
                    "type_discount"=>$detail->type_discount,
                    "discount"=>$detail->discount,
                    "quantity"=>$detail->quantity,
                    "product_size_id"=>$detail->product_size_id,
                    "product_size"=>$detail->product_size?[
                        "id"=>$detail->product_size->id,
                        "name"=>$detail->product_size->name,

                    ]:NULL,
                    "image"=>$detail->product->images,
                    "imageEcommerce"=>env("APP_URL")."/storage/".$detail->product->images,

                    "code_cupon"=>$detail->code_cupon,
                    "code_discount"=>$detail->code_discount,
                    "unit_price"=>$detail->unit_price,
                    "subtotal"=>$detail->subtotal,
                    "product_color_size"=>$detail->product_color_size?[
                        "id"=>$detail->product_color_size->id,
                        "name"=>$detail->product_color_size->name,

                    ]:NULL,


                   

                ];



            }),
        ];
    }
}
