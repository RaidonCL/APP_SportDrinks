import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    // Aquí puedes implementar la lógica para verificar el inicio de sesión
    // Por ejemplo, puedes verificar el correo y la contraseña en una base de datos o servicio de autenticación
    // Si el inicio de sesión es exitoso, puedes redirigir a otra página
    this.router.navigate(['/inicio']);
  }
}
