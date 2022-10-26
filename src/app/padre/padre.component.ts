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
  cursos: Curso[] = [];
  constructor() {}

  ngOnInit(): void {}

  cambiarTechCamper() {
    this.persona.nombre = 'Sandra Pérez';
    this.persona.edad = 32;
    this.persona.profesion = 'Abogada';
  }

  recibirCurso(curso: Curso) {
    alert(`Curso ${curso.codigo} - ${curso.nombre} recibido desde el padre`);
    let nuevoCurso: Curso = {
      nombre: curso.nombre,
      codigo: curso.codigo,
      cantidad_horas: curso.cantidad_horas,
    };
    this.cursos.push(nuevoCurso);
  }
}
