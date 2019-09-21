import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../inscription.service';

@Component({
  //selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(public inscriptionService:InscriptionService) { }

  ngOnInit() {
  }

}
