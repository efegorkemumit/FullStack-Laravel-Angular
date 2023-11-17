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

  home():Observable<any>{
    let URL = URL_SERVICE + '/home';

   

    return this.http.get<any>(URL,);
      
  }

  productdetail(id:number):Observable<any>{
    let URL = URL_SERVICE + '/detail/'+id;

   

    return this.http.get<any>(URL,);
      
  }

  
}
