import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarLugarComponent } from './componentes/agregar-lugar/agregar-lugar.component';
import { AgregarPersonaComponent } from './componentes/agregar-persona/agregar-persona.component';
import { ComponentesModule } from './componentes/componentes.module';
import { HttpService } from './shared/services/http.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ComponentesModule,
  ],
  providers: [HttpService,],
  bootstrap: [AppComponent,]
})
export class AppModule { }
