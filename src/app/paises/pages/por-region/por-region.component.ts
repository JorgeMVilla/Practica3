import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  constructor(private PaisService:PaisService) { }

  regiones:string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CEFTA','NAFTA','SAARC'];
  
  regionActiva:string='';

  match :boolean = false;

  paises:Country[]=[];

  ngOnInit(): void {
  }


  buscar( region: string){

    if( region !== this.regionActiva){

   
    this.regionActiva=region;
    this.match=true; 
    this.PaisService.buscarPais(region, 'regionalbloc').subscribe(resp=>{
      this.paises=resp;
    });
  }
  }


}
