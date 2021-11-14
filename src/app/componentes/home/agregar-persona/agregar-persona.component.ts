import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PersonaService } from 'src/app/shared/services/persona/persona.service';

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.scss']
})
export class AgregarPersonaComponent implements OnInit {

  createPersona: FormGroup;

  constructor(private fb: FormBuilder, private personaService: PersonaService) {
    this.createPersona = this.fb.group({
      nombre: ['', Validators.required],
      raza: [''],
      clan: [''],
      edad_nacimiento: [''],
      edad_muerte: [''],
      descripcion: [''],
    })
   }

  ngOnInit() {
  }

  agregarPersona() {
    const personaje: any = {
      nombre: this.createPersona.value.nombre,
      raza: this.createPersona.value.raza,
      clan: this.createPersona.value.clan,
      edad_nacimiento: this.createPersona.value.edad_nacimiento,
      edad_muerte: this.createPersona.value.edad_muerte,
      descripcion: this.createPersona.value.descripcion,
    }

    this.personaService.agregarPersona(personaje).then(() => {
      console.log('Persona agregada con exito a firebase');
    }).catch(error => {
      console.warn(error);
    })
    this.createPersona.reset();
  }

}
