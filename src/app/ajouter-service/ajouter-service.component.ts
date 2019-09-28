import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import{AjouterserviceService} from '../ajouterservice.service'

@Component({
  selector: 'app-ajouter-service',
  templateUrl: './ajouter-service.component.html',
  styleUrls: ['./ajouter-service.component.css']
})
export class AjouterServiceComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private as: AjouterserviceService) {
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
      ville: ['', Validators.required ],
      td: ['', Validators.required ],
      gr: ['', Validators.required ],
      fonction: ['', Validators.required ],
      nd: ['', Validators.required ],
      natureTemps: ['', Validators.required ]
    });
  }
  addservice(ville, td, gr,fonction, nd, natureTemps) {
    this.as.addservice(ville, td, gr, fonction, nd,natureTemps).subscribe(data=> {
         console.log("service crée",data);
         
    },err=>{
          console.log("erreur cote serveur",err);
          
    });
  }



  ngOnInit() {
  }

}
