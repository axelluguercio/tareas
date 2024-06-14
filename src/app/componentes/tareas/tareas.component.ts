// src/app/componentes/tareas/tareas.component.ts
import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../servicios/tarea.service';
import { Tarea } from '../../interfaces/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tareas: Tarea[];

  constructor(private tareaService: TareaService) {
    this.tareas = this.tareaService.getTareas();
  }

  ngOnInit(): void {}

  eliminarTarea(id: number): void {
    this.tareaService.eliminarTarea(id);
    this.tareas = this.tareaService.getTareas();
  }
}

