import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { URL_SERVICE } from 'src/config/config';


@Injectable({
  providedIn: 'root'
})
export class SliderService {

 
  constructor(private http: HttpClient) { }

  getSlider():Observable<any>{
    let URL = URL_SERVICE + '/slider/all';

   

    return this.http.get<any>(URL,);
      
  }

  deleteSlider(userId:number):Observable<any>{
    let URL = URL_SERVICE + '/slider/' +userId;

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

  create(data:any):Observable<any>{
    let URL = URL_SERVICE + '/slider/add';

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
  getSliderDetail(id:number):Observable<any>{
    let URL = URL_SERVICE + '/slider/detail/' +id;

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
    let URL = URL_SERVICE + '/slider/update/' +id;

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
