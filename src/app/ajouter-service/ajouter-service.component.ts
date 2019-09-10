import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-service',
  templateUrl: './ajouter-service.component.html',
  styleUrls: ['./ajouter-service.component.css']
})
export class AjouterServiceComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
      ville: ['', Validators.required ],
      td: ['', Validators.required ],
      gr: ['', Validators.required ],
      fonction: ['', Validators.required ],
      nd: ['', Validators.required ],
      NatureTemps: ['', Validators.required ]
    });
  }


  ngOnInit() {
  }

}
