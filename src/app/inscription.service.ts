import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user.model';
import { ConnexionServiceService } from './connexion-service.service';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  baseUrl ='api/user';
  user:User=new User();
  constructor(private http:HttpClient) { }
  
  addUser(user:User):Observable<any>{
    return this.http.post(this.baseUrl+'/add',user);
  }
}

