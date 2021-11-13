import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MostrarLugaresComponent } from './components/mostrar-lugares/mostrar-lugares.component';
import { MostrarPersonasComponent } from './components/mostrar-personas/mostrar-personas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mostrar-personas', component: MostrarPersonasComponent},
  {path: 'mostrar-personas/:id', component: MostrarPersonasComponent},
  {path: 'mostrar-lugares', component: MostrarLugaresComponent},
  {path: 'mostrar-lugares/:id', component: MostrarLugaresComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
