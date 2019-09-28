import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjouterserviceService {
  baseUrl ='api/service';

  constructor(private http:HttpClient) { }
  addservice(ville,td, gr,fonction,nd,natureTemps):Observable<any>{
    const obj = {
      ville:ville,
      td: td,
      gr: gr,
      fonction:fonction,
      nd:nd,
      natureTemps:natureTemps
      
    };
   return this.http.post(this.baseUrl,{ville:ville,td:td,gr:gr,fonction:fonction,nd:nd,natureTemps:natureTemps});
    }
    
}
