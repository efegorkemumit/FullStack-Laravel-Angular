import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICE } from 'src/config/config';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(page=1, LINK=''):Observable<any>{
    let URL = URL_SERVICE + '/product/all?page='+page+LINK;

   

    return this.http.get<any>(URL,);
      
  }
  create(data:any):Observable<any>{
    let URL = URL_SERVICE + '/product/add';

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
}
