import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../inscription.service';
import { ConnexionServiceService } from '../connexion-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public connexionService:ConnexionServiceService,public inscriptionService:InscriptionService) { }

  ngOnInit() {
  }

}
