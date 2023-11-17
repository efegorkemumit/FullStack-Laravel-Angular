<?php

namespace App\Http\Resources\Ecommerce;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Discount\Discount;

class ProductEcomResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $imageCollection = collect(json_decode($this->resource->imagess, true));
        $sizesCollection =$this->resource->sizes;
        $discountproducts = collect(json_decode($this->resource->discountproducts, true));
        $price_usd = $this->resource->price_usd;
        $newPrice=null;
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

            "discount_p"=>$discountproducts->map(function($disco) use ($price_usd){
                $discountInfo=null;
                $type_dc = null;
                $discountvalue= null;
                if($disco["discount_id"]){
                    $discount = Discount::find($disco['discount_id']);

                    if($discount){
                        $discountInfo= [
                            "id"=>$discount->id,
                            "type_discount"=>$discount->type_discount,
                            "discount"=>$discount->discount,
                            "start_date"=>$discount->start_date,
                            "end_date"=>$discount->end_date,
                            "type"=>$discount->type,
                        ];
                    }
                }

                $type_dc = $discount->type_discount;
                $discountvalue= $discount->discount;

               
                if($type_dc==1)
                {
                    $newPrice = $price_usd - (($price_usd*$discountvalue)/100);

                    
                }
                else if($type_dc==2)
                {    
                     $newPrice = $price_usd - $discountvalue;
                     if($newPrice<0)
                     {
                        $newPrice = $price_usd;
                     }

                }


                return[
                    "type_dc"=>$type_dc,
                    "discountvalue"=>$discountvalue,
                    "newPrice"=>$newPrice,
                    "id"=>$disco['id'],
                    "product_id"=>$disco['product_id'],
                    "discount_id"=>$disco['discount_id'],
                    "discount_info"=>$discountInfo,
                 
                ];

            }),
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
