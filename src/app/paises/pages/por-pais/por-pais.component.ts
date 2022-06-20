import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {

  termino:string= '';

  match :boolean = false;
  paises: Country[] =[];

  paisesSug: Country[] =[];

  constructor(private PaisService:PaisService) { }

  predict( termino:string){
    this.match=true; 
    
    this.PaisService.buscarPais( termino, 'name')
    .subscribe( paises => this.paisesSug= paises.splice(0,3),
    (err) => this.paisesSug=[]
    );
  }

  buscar( pais: string){
    this.termino=pais;
    this.paisesSug=[]
    this.match=true; 
    this.PaisService.buscarPais(this.termino, 'name').subscribe(resp=>{
      this.paises=resp;
    }, (err)=>{
      console.log("Notfound")
      this.match=false;
    });
   
  }
}
