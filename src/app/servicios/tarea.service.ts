import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareas: Tarea[] = [];
  private currentId = 0;

  constructor() { }

  getTareas(): Tarea[] {
    return this.tareas;
  }

  agregarTarea(tarea: Omit<Tarea, 'id'>) {
    this.tareas.push({ ...tarea, id: this.currentId++ });
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
