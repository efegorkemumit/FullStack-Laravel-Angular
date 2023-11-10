import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICE } from 'src/config/config';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getinfo():Observable<any>{
    let URL = URL_SERVICE + '/product/get_info';

   

    return this.http.get<any>(URL,);
      
  }


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

  imgAddimage(data:any):Observable<any>{
    let URL = URL_SERVICE + '/product/img/add';

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

  imgDelete(images_id:number):Observable<any>{
    let URL = URL_SERVICE + '/product/img/delete/' +images_id;

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

  sizecolorAdd(data:any):Observable<any>{
    let URL = URL_SERVICE + '/product/sizecolor/add';

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


  sizeDelete(size_id:number):Observable<any>{
    let URL = URL_SERVICE + '/product/size/delete/' +size_id;

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
  colorDelete(color_id:number):Observable<any>{
    let URL = URL_SERVICE + '/product/color/delete/' +color_id;

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

  getShowDetail(id:number):Observable<any>{
    let URL = URL_SERVICE + '/product/show_product/' +id;

    const token = localStorage.getItem('token');

    if(!token)
    {
      return of(null);
    }
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,}
    );

    return this.http.get<any>(URL, {headers});
      
  }

  update(id:number, data:any):Observable<any>{
    let URL = URL_SERVICE + '/product/update/' +id;

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
}
