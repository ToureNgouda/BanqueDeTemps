import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { User } from '../model/user.model';
import { ConnexionServiceService } from '../connexion-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conexion',
  templateUrl: './conexion.component.html',
  styleUrls: ['./conexion.component.css']
})
export class ConexionComponent implements OnInit {
  angForm:FormGroup;
  user:User=new User();
  constructor(private fb: FormBuilder , private connexionService:ConnexionServiceService, public router:Router) { 
    
  }

  ngOnInit() {
    this.angForm=this.fb.group({
      'email':new FormControl(this.user.email,Validators.required),
      'passWord':new FormControl(this.user.passWord,Validators.required),
      
    });
  }
  createConnexion(){
    console.log(this.user);
    this.connexionService.createConnetion(this.user).subscribe(
      data=>{
        console.log('connexion reuissi ',data)
        this.router.navigate(['accueil']);
    
      },err=>{
          console.log("error cote serveur",err)
      }
    );
}
}