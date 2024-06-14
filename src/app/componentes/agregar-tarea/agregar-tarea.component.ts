// src/app/componentes/agregar-tarea/agregar-tarea.component.ts
import { Component } from '@angular/core';
import { TareaService } from '../../servicios/tarea.service';
import { Tarea } from '../../interfaces/tarea';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent {
  titulo: string = '';
  descripcion: string = '';

  constructor(private tareaService: TareaService) {}

  agregarTarea(): void {
    const nuevaTarea: Tarea = {
      id: Date.now(),
      titulo: this.titulo,
      descripcion: this.descripcion,
      completada: false
    };

    this.tareaService.agregarTarea(nuevaTarea);
    this.titulo = '';
    this.descripcion = '';
  }
}
