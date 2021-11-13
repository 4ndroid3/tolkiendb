import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarLugarComponent } from './agregar-lugar/agregar-lugar.component';
import { AgregarPersonaComponent } from './agregar-persona/agregar-persona.component';
import { HomeComponent } from './home/home.component';
import { MostrarPersonasComponent } from './mostrar-personas/mostrar-personas.component';
import { MostrarLugaresComponent } from './mostrar-lugares/mostrar-lugares.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AgregarLugarComponent,
    AgregarPersonaComponent,
    HomeComponent,
    MostrarPersonasComponent,
    MostrarLugaresComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    AgregarLugarComponent,
    AgregarPersonaComponent,
    HomeComponent,
    MostrarPersonasComponent,
    MostrarLugaresComponent
  ]
})
export class ComponentesModule { }
