import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { URL_SERVICE } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class EccomerceService {

  constructor(private http: HttpClient) { }

  getCategory():Observable<any>{
    let URL = URL_SERVICE + '/category/all';

   

    return this.http.get<any>(URL,);
      
  }

  deletecategory(userId:number):Observable<any>{
    let URL = URL_SERVICE + '/category/' +userId;

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
