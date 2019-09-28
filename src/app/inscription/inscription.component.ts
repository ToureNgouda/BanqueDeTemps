import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { InscriptionService } from '../inscription.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  angForm:FormGroup;
  user:User=new User();
  private toasterService: ToasterService;
  constructor(private fb: FormBuilder,private  inscriptionService:InscriptionService, toasterService:ToasterService,
    public router:Router) { 
      this.toasterService = toasterService;
    }

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
      this.router.navigate(['accueil']);
      this.toasterService.pop('info','inscription réussi');
    },err=>{
       this.toasterService.pop('error','error coté serveur');
       console.log("erreur cote serveur");
       
    });
  }
}
