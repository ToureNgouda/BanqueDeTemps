import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { InscriptionService } from '../inscription.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  angForm:FormGroup;
  user:User=new User();
  constructor(private fb: FormBuilder,private  inscriptionService:InscriptionService,public router:Router) { }

  ngOnInit() {
     this.angForm = this.fb.group({
          email:new FormControl(this.user.email,Validators.required),
          nom:new FormControl(this.user.nom,Validators.required),
          passWord: new FormControl(this.user.passWord,Validators.required),
          comfirmePassWord:new FormControl(this.user.confirmePassWord,Validators.required)
     });
  }
  addUser(){
    console.log(this.user)
    this.inscriptionService.addUser(this.user).subscribe(data=>{
      console.log('utilisateur creer');
      this.inscriptionService.isInscrit=true;
      this.router.navigate(['conexion'])
    });
  }
}
