import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareas: Tarea[] = [];

  constructor() { }

  getTareas(): Tarea[] {
    return this.tareas;
  }

  agregarTarea(tarea: Tarea): void {
    this.tareas.push(tarea);
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }
}