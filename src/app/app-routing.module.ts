import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainComponent } from "./paises/pages/main/main.component";

import { PerfilPaisComponent } from "./paises/pages/perfil-pais/perfil-pais.component";
import { PorCapitalComponent } from "./paises/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./paises/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./paises/pages/por-region/por-region.component";

const routes: Routes= [
    {
        path: '',
        component: MainComponent,
        pathMatch: 'full'
    },
    {
        path: 'pais',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,
        pathMatch: 'full'
    },
    {
        path: 'capital',
        component: PorCapitalComponent,
        pathMatch: 'full'
    },
    {
        path: 'verPais/:id',
        component: PerfilPaisComponent,
        pathMatch: 'full'
    },

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}