import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { URL_SERVICE } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }


  getCategory():Observable<any>{
    let URL = URL_SERVICE + '/category/all';

   

    return this.http.get<any>(URL,);
      
  }

}
