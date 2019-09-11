import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AjouterServiceComponent } from './ajouter-service/ajouter-service.component';
import { DemanderServiceComponent } from './demander-service/demander-service.component';
import { ServiceDisponibleComponent } from './service-disponible/service-disponible.component';
import { ServiceDemanderComponent } from './service-demander/service-demander.component';
import { AccueilComponent } from './accueil/accueil.component';
import{ReactiveFormsModule}from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AjouterServiceComponent,
    DemanderServiceComponent,
    ServiceDisponibleComponent,
    ServiceDemanderComponent,
    AccueilComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
