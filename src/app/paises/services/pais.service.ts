import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private paisURL:string = 'https://restcountries.com/v2';

  private fieldsURL= 'name,flag,capital,aplha2Code,alpha3Code,population,languages,region,subregion'

  constructor(private http: HttpClient) { }


 


  buscarPais( termino:string , tipo:string): Observable<Country[]>{
    const url= `${this.paisURL}/${tipo}/${termino}?fields=${this.fieldsURL}`;

    return this.http.get<Country[]>(url)
  }

  getPais( id:string):Observable<Country>{
    const url= `${this.paisURL}/alpha/${id}`;

    return this.http.get<Country>(url)
  }
}
