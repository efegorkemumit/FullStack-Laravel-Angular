import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICE } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  constructor(private http: HttpClient) { }

  basketlist():Observable<any>{
    let URL = URL_SERVICE + '/Ecommerce/cart';

   

    return this.http.get<any>(URL,);
      
  }
}
