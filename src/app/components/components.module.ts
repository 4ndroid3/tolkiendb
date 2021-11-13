import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AgregarLugarComponent } from "./agregar-lugar/agregar-lugar.component";
import { AgregarPersonaComponent } from "./agregar-persona/agregar-persona.component";
import { HomeComponent } from "./home/home.component";
import { MostrarLugaresComponent } from "./mostrar-lugares/mostrar-lugares.component";
import { MostrarPersonasComponent } from "./mostrar-personas/mostrar-personas.component";

@NgModule({
    declarations: [
        AgregarPersonaComponent,
        AgregarLugarComponent,
        HomeComponent,
        MostrarLugaresComponent,
        MostrarPersonasComponent
    ],
    imports: [
      CommonModule, RouterModule,
    ],
    exports: [ 
        AgregarPersonaComponent,
        AgregarLugarComponent,
        HomeComponent,
        MostrarLugaresComponent,
        MostrarPersonasComponent
    ],
  
  })

export class ComponentsModule { }