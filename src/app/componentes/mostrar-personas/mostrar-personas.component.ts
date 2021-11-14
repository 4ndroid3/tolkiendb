import { Component, Input, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/shared/services/persona/persona.service';

@Component({
  selector: 'app-mostrar-personas',
  templateUrl: './mostrar-personas.component.html',
  styleUrls: ['./mostrar-personas.component.scss']
})
export class MostrarPersonasComponent implements OnInit {

  personajes: any[] = [];

  constructor(private personaService: PersonaService) {
    
  }

  ngOnInit() {
    this.getPersonajes();
  }

  getPersonajes() {
    this.personaService.getPersonas().subscribe(data => {
      this.personajes = [];
      data.forEach((element: any) => {
        this.personajes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    });
  }

}
