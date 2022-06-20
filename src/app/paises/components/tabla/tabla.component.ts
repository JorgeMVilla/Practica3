import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor() { }

   @Input() paises: Country[]=[]

  ngOnInit(): void {
  }

}
