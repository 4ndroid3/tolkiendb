import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarLugarComponent } from './components/agregar-lugar/agregar-lugar.component';
import { AgregarPersonaComponent } from './components/agregar-persona/agregar-persona.component';
import { ComponentsModule } from './components/components.module';
import { HttpService } from './shared/services/http.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AgregarLugarComponent,
    AgregarPersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ComponentsModule,
  ],
  providers: [HttpService,],
  bootstrap: [AppComponent,]
})
export class AppModule { }
