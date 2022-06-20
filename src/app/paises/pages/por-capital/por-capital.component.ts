import { Component, OnInit } from '@angular/core';


import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  constructor(private PaisService:PaisService) { }

  ngOnInit(): void {
  }

  termino:string= '';
  match :boolean = false;
  paises: Country[] =[];
  paisesSug: Country[] =[];
  

  predict( termino:string){
    this.match=true; 
    
    this.PaisService.buscarPais( termino, 'capital')
    .subscribe( paises => this.paisesSug= paises.splice(0,3),
    (err) => this.paisesSug=[]
    );
  }

  
  buscar( capital: string){
    this.termino=capital;

    this.match=true; 
    this.PaisService.buscarPais(this.termino, 'capital').subscribe(resp=>{
      this.paises=resp;
    }, (err)=>{
      console.log("Notfound")
      this.match=false;
    });
   
  }
}
