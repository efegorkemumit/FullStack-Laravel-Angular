import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

    

    return this.http.get<any>(URL, {headers});
      
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

  deletecategory(id:number):Observable<any>{
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
