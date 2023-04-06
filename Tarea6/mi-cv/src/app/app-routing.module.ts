import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component'; 
import { EducacionComponent } from './educacion/educacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CursosComponent } from './cursos/cursos.component';
import { InfContactoComponent } from './inf-contacto/inf-contacto.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'inf-contacto', component: InfContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
