import { Component, OnInit } from '@angular/core';
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
}
