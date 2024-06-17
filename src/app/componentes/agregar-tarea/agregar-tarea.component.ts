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

  constructor(public tareaService: TareaService) {}

  agregarTarea() {
    if (this.titulo && this.descripcion) {
      const nuevaTarea = {
        titulo: this.titulo,
        descripcion: this.descripcion,
        completada: false
      };
      this.tareaService.agregarTarea(nuevaTarea);
      this.titulo = '';
      this.descripcion = '';
    }
  }

  eliminarTarea(index: number) {
    this.tareaService.eliminarTarea(index);
  }

  get tareas(): Tarea[] {
    return this.tareaService.getTareas();
  }
}
