import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICE } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getSlider():Observable<any>{
    let URL = URL_SERVICE + '/slider/all';

   

    return this.http.get<any>(URL,);
      
  }

  getProduct():Observable<any>{
    let URL = URL_SERVICE + '/product/all';

   

    return this.http.get<any>(URL,);
      
  }

  
}
