import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-local',
  templateUrl: './registro-local.page.html',
  styleUrls: ['./registro-local.page.scss'],
})
export class RegistroLocalPage {
  registroLocalForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registroLocalForm = this.formBuilder.group({
      nombre: ['', Validators.pattern('[A-Za-z ]+')],
      dirección: [''],
      correo: ['', Validators.email],
      rut: ['', Validators.pattern('\\d{1,2}\\.\\d{3}\\.\\d{3}-[\\d|kK]')],
      teléfono: ['', Validators.minLength(9)],
      contraseña: ['', Validators.minLength(6)],
    });
  }

  validarRegistro() {
    if (this.registroLocalForm.valid) {
      // El formulario es válido, puedes realizar la acción de registro
      console.log('Formulario válido. Realizando registro...');
    } else {
      // El formulario no es válido, puedes mostrar mensajes de error o realizar otras acciones
      console.log('Formulario inválido. Revise los campos.');
    }
  }
}