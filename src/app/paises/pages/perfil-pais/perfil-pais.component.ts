import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-perfil-pais',
  templateUrl: './perfil-pais.component.html',
  styleUrls: ['./perfil-pais.component.css']
})
export class PerfilPaisComponent implements OnInit {

  constructor( private ruta:ActivatedRoute , 
                private PaisService:PaisService) { }


    pais!: Country;

  ngOnInit(): void {

        this.ruta.params.subscribe(({id}) => {
            console.log( id );

            this.PaisService.getPais(id).subscribe( pais=> {
              console.log(pais);
              this.pais=pais;
            });



          })
  }

}
