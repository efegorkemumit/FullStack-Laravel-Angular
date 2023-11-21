import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { URL_SERVICE } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getUsersCount():Observable<any>{
    let URL = URL_SERVICE + '/admin/users/count';

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

  getLastUsers():Observable<any>{
    let URL = URL_SERVICE + '/admin/users/latest';

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

  topfourall():Observable<any>{
    let URL = URL_SERVICE + '/topfour/all';

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
  topfoursale():Observable<any>{
    let URL = URL_SERVICE + '/topfoursale/all';

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
}
