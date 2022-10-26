/**
 * Se importa Input, Output y EventEmitter
 */
import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
