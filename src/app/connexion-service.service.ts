import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionServiceService {
  baseUrl ='api/login';
  user:User=new User();
  constructor(private http:HttpClient) { }
   createConnetion(user:User):Observable<any>{
    return this.http.post(this.baseUrl,user);
   }
}
