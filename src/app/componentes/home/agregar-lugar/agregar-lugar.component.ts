import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-lugar',
  templateUrl: './agregar-lugar.component.html',
  styleUrls: ['./agregar-lugar.component.scss']
})
export class AgregarLugarComponent implements OnInit {

  createLugar: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createLugar = this.fb.group({
      nombre: ['', Validators.required],
      raza: [''],
      clan: [''],
      descripcion: [''],
    })
  }

  ngOnInit() {
  }

  agregarLugar() {
    console.log(this.createLugar)
  }

}
