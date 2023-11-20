import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { URL_SERVICE } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  constructor(private http: HttpClient) { }

  //Ecommerce/cart"
 // Ecommerce/cart/add"
  //Ecommerce/cart/update/{id}
//Ecommerce/cart/delete/{id}

  basketlist():Observable<any>{
    let URL = URL_SERVICE + '/Ecommerce/cart';

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

  create(data:any):Observable<any>{
    let URL = URL_SERVICE + '/Ecommerce/cart/add';

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

  
  checkout(data:any):Observable<any>{
    let URL = URL_SERVICE + '/Client/checkout';

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

  update(id:number, data:any):Observable<any>{
    let URL = URL_SERVICE + '/Ecommerce/cart/update/'+id;

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

  delete(id:number):Observable<any>{
    let URL = URL_SERVICE + '/Ecommerce/cart/delete/'+id;

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
  applycupon(cupon:any):Observable<any>{
    let URL = URL_SERVICE + '/Ecommerce/applycupon/'+cupon;

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

 clientaddress():Observable<any>{
  let URL = URL_SERVICE + '/Client/address';

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

createAddress(data:any):Observable<any>{
  let URL = URL_SERVICE + '/Client/address/add';

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

updateAddress(id:number, data:any):Observable<any>{
  let URL = URL_SERVICE + '/Client/address/update/'+id;

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

deleteAddress(id:number):Observable<any>{
  let URL = URL_SERVICE + '/Client/address/delete/'+id;

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
