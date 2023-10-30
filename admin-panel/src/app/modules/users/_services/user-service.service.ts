import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { URL_SERVICE } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    let URL = URL_SERVICE + '/admin/users';

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

  getUserDetail(userId:number):Observable<any>{
    let URL = URL_SERVICE + '/admin/users/' +userId;

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

  updateUserDetail(userId:number, userData:any):Observable<any>{
    let URL = URL_SERVICE + '/admin/users/update/' +userId;

    const token = localStorage.getItem('token');

    if(!token)
    {
      return of(null);
    }
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,}
    );

    return this.http.put<any>(URL, userData, {headers});
      
  }

  deleteUser(userId:number):Observable<any>{
    let URL = URL_SERVICE + '/admin/users/delete/' +userId;

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
