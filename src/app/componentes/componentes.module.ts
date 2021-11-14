import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarLugarComponent } from './home/agregar-lugar/agregar-lugar.component';
import { AgregarPersonaComponent } from './home/agregar-persona/agregar-persona.component';
import { HomeComponent } from './home/home.component';
import { MostrarPersonasComponent } from './mostrar-personas/mostrar-personas.component';
import { MostrarLugaresComponent } from './mostrar-lugares/mostrar-lugares.component';
import { SharedModule } from '../shared/shared.module';
import { PersonaComponent } from './mostrar-personas/persona/persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarLugarComponent,
    AgregarPersonaComponent,
    HomeComponent,
    MostrarPersonasComponent,
    MostrarLugaresComponent,
    PersonaComponent,
  ],
  imports: [
    CommonModule, SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    AgregarLugarComponent,
    AgregarPersonaComponent,
    HomeComponent,
    MostrarPersonasComponent,
    MostrarLugaresComponent,
    PersonaComponent,
  ]
})
export class ComponentesModule { }
