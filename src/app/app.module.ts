import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AjouterServiceComponent } from './ajouter-service/ajouter-service.component';
import { DemanderServiceComponent } from './demander-service/demander-service.component';
import { ServiceDisponibleComponent } from './service-disponible/service-disponible.component';
import { ServiceDemanderComponent } from './service-demander/service-demander.component';
import { AccueilComponent } from './accueil/accueil.component';
import{ReactiveFormsModule, FormGroup}from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { ConexionComponent } from './conexion/conexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AjouterServiceComponent,
    DemanderServiceComponent,
    ServiceDisponibleComponent,
    ServiceDemanderComponent,
    AccueilComponent,
    HeaderComponent,
    ConexionComponent,
    InscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
