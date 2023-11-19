<?php

namespace App\Http\Resources\Cart;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartshopResource extends JsonResource
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
            "user_id"=>$this->resource->user_id,
            "user"=>[
                "id"=> $this->resource->client->id,
                "name"=> $this->resource->client->name,
                "email"=> $this->resource->client->email,

            ],
            "product_id"=>$this->resource->product_id,
            "product"=>[
                "id"=> $this->resource->product->id,
                "title"=> $this->resource->product->title,
                "price_dsc"=> $this->resource->product->price_dsc,
                "price_usd"=> $this->resource->product->price_usd,
                "images"=> env("APP_URL")."/storage/".$this->resource->product->images,
            ],
            "type_discount"=>$this->resource->type_discount,
            "discount"=>$this->resource->discount,
            "quantity"=>$this->resource->quantity,
            "product_size_id"=>$this->resource->product_size_id,
            "product_size"=> $this->resource->product_size ? 
            [
                "id"=> $this->resource->product_size->id,
                "name"=> $this->resource->product_size->name,

            ]:NULL,
            "product_size_color_id"=>$this->resource->product_size_color_id,
            "product_color_size"=> $this->resource->product_color_size ? 
            [
                "id"=> $this->resource->product_color_size->id,
               // "name"=> $this->resource->product_color_size->name,

            ]:NULL,
            "code_cupon"=>$this->resource->code_cupon,
            "code_discount"=>$this->resource->code_discount,
            "unit_price"=>$this->resource->unit_price,
            "subtotal"=>$this->resource->subtotal,
            "total"=>$this->resource->total,







         
        ];
    }
}
