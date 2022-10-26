import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**
   * Interpolación
   * Se define el atributo que se va a interpolar en el template
   */
  clienteActual: String = 'William Nicolás Buitrago';
  urlImagen: String =
    'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350';

  /**
   * Template statements
   */
  cambiarCliente(nuevoCliente: String) {
    this.clienteActual = nuevoCliente;
  }

  /**
   * Data Binding
   */
  controlActivo: boolean = false;
}
