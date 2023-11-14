import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { URL_SERVICE } from 'src/config/config';


@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http: HttpClient) { }
  getDiscount():Observable<any>{
    let URL = URL_SERVICE + '/discount/all';

   

    return this.http.get<any>(URL,);
      
  }
  
  configall():Observable<any>{
    let URL = URL_SERVICE + '/cupons/config-all';

   

    return this.http.get<any>(URL,);
      
  }

  getShowDiscount(id:number):Observable<any>{
    let URL = URL_SERVICE + '/discount/show_discount/' +id;

    

    return this.http.get<any>(URL);
      
  }

  update(id:number, data:any):Observable<any>{
    let URL = URL_SERVICE + '/discount/update/' +id;

    const token = localStorage.getItem('token');

    if(!token)
    {
      return of(null);
    }
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,}
    );

    return this.http.post<any>(URL, data,  {headers});
      
  }

  create(data:any):Observable<any>{
    let URL = URL_SERVICE + '/discount/add';

    const token = localStorage.getItem('token');

    if(!token)
    {
      return of(null);
    }
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,}
    );

    return this.http.post<any>(URL, data, {headers});
      
  }

  deletediscount(id:number):Observable<any>{
    let URL = URL_SERVICE + '/discount/delete/' +id;

    const token = localStorage.getItem('token');

    if(!token)
    {
      return of(null);
    }
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,}
    );

    return this.http.delete<any>(URL, {headers});
      
  }


}
