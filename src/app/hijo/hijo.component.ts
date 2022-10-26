/**
 * Se importa Input, Output y EventEmitter
 */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Curso } from '../Interfaces/curso.interface';
/**
 * Importación de interfaz persona
 */
import { Persona } from '../Interfaces/persona.interface';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  /**
   * Paso de parámetros por valor
   */
  @Input() mensaje: String = 'Hola';

  /**
   * Paso de parámetros como variable
   */
  @Input() techCamper!: Persona;

  /**
   * Se declaran los @Output que se pasarán de hijo a padre
   */
  @Output() eventCurso: EventEmitter<Curso> = new EventEmitter<Curso>();

  curso: Curso = { codigo: '', nombre: '', cantidad_horas: 0};

  constructor() {}

  ngOnInit(): void {}

  enviarCursoAPadre() {
    alert('Curso enviado al padre');
    this.eventCurso.emit(this.curso);
  }


  prueba="Hola"


}
