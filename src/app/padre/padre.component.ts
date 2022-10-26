import { Component, OnInit } from '@angular/core';
import { Curso } from '../Interfaces/curso.interface';
/**
 * Importación de interfaz persona
 */
import { Persona } from '../Interfaces/persona.interface';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  persona: Persona = {
    nombre: 'Andres Leyva',
    edad: 21,
    profesion: 'Ingeniero Electrónico',
  };
  constructor() {}

  ngOnInit(): void {}

  cambiarTechCamper() {
    this.persona.nombre = 'Mariana Pérez';
    this.persona.edad = 32;
    this.persona.profesion = 'Abogada';
  }

  recibirCurso(curso: Curso) {
    alert(`Curso ${curso.codigo} - ${curso.nombre} recibido desde el padre`);
  }
}
