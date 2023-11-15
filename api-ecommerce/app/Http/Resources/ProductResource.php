<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
    
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $imageCollection = collect(json_decode($this->resource->imagess, true));
        $sizesCollection =$this->resource->sizes;



        return[
            "id"=>$this->id,
            "title"=>$this->resource->title,
            "category_id"=>$this->resource->category_id,
            "category"=>[
                "id"=>$this->resource->category->id,
                "name"=>$this->resource->category->name,
                "icon"=>$this->resource->category->icon,
                "images"=>$this->resource->category->images,
            ],
            "slug"=>$this->resource->slug,
            "sku"=>$this->resource->sku,
            "price_dsc"=>$this->resource->price_dsc,
            "price_usd"=>$this->resource->price_usd,
            "tags"=>$this->resource->tags,
            "tags_a"=>$this->resource->tags ? explode(",", $this->resource->tags): [],
            "stock"=>$this->resource->stock,
            "description"=>$this->resource->description,
            "summary"=>$this->resource->summary,
            "state"=>$this->resource->state,
            "interview"=>$this->resource->interview,
            "image"=>$this->resource->images,
            "imageEcommerce"=>env("APP_URL")."/storage/".$this->resource->images,
            "images"=> $imageCollection->map(function($img){
                return[
                    "id"=>$img['id'],
                    "file_name"=>$img['file_name'],
                    "size"=>$img['size'],
                    "type"=>$img['type'],
                    "images"=>env("APP_URL")."/storage/".$img['images']
                ];
            }),
           "sizes"=>$sizesCollection->map(function($size){
                return[
                    "id"=>$size['id'],
                    "name"=>$size['name'],
                    "total"=>$size->product_size_colors->sum("stock"),
                    "variant"=>$size->product_size_colors->map(function($var){
                        return [
                            "id"=>$var->id,
                            "product_color_id"=>$var->product_color_id,
                            "product_color"=>$var->product_color,
                            "stock"=>$var->stock,
                        ];
                    }),

                ];
           }),

        ];
    }
}
