import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { URL_SERVICE } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class CuponService {

  constructor(private http: HttpClient) { }

  getCupon():Observable<any>{
    let URL = URL_SERVICE + '/cupons/all';

   

    return this.http.get<any>(URL,);
      
  }

  configall():Observable<any>{
    let URL = URL_SERVICE + '/cupons/config-all';

   

    return this.http.get<any>(URL,);
      
  }


  getShowCupon(id:number):Observable<any>{
    let URL = URL_SERVICE + '/cupons/show/' +id;

    

    return this.http.get<any>(URL);
      
  }

  update(id:number, data:any):Observable<any>{
    let URL = URL_SERVICE + '/cupons/update/' +id;

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
    let URL = URL_SERVICE + '/cupons/add';

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

  deletecupon(id:number):Observable<any>{
    let URL = URL_SERVICE + '/cupons/delete/' +id;

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
