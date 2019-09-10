import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterServiceComponent } from './ajouter-service/ajouter-service.component';
import { DemanderServiceComponent } from './demander-service/demander-service.component';
import { ServiceDisponibleComponent } from './service-disponible/service-disponible.component';
import { ServiceDemanderComponent } from './service-demander/service-demander.component';
import{Routes,RouterModule} from'@angular/router';

const appRoutes: Routes=[
  {path:'accueil',component:AccueilComponent},
  {path:'ajouterService',component:AjouterServiceComponent},
  {path:'demanderService',component:DemanderServiceComponent},
  {path:'servicesDisponibles',component:ServiceDisponibleComponent},
  {path:'servicesDemander',component:ServiceDemanderComponent},
  {path:'',redirectTo:'/acueil',pathMatch:'full'}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
