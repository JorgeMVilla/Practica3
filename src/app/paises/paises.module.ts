import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { MainComponent } from './pages/main/main.component';
import { PerfilPaisComponent } from './pages/perfil-pais/perfil-pais.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { InputComponent } from './components/input/input.component';





@NgModule({
  declarations: [
    MainComponent,
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    PerfilPaisComponent,
    TablaComponent,
    InputComponent,
  ],
  exports: [
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    MainComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})

export class PaisesModule { }
