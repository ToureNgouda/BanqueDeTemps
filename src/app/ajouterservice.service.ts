import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjouterserviceService {

  constructor() { }
  addservice(ville,td, gr,fonction,nd,natureTemps) {
    const obj = {
      ville:ville,
      td: td,
      gr: gr,
      fonction:fonction,
      nd:nd,
      natureTemps:natureTemps
      
    };
    console.log(obj);
    }
    
}
