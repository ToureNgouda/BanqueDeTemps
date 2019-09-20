import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-demander-service',
  templateUrl: './demander-service.component.html',
  styleUrls: ['./demander-service.component.css']
})
export class DemanderServiceComponent implements OnInit {
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
