import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../interfaces/tarea';

@Component({
  selector: 'app-tarea-item',
  templateUrl: './tarea-item.component.html',
  styleUrls: ['./tarea-item.component.css']
})
export class TareaItemComponent {
  @Input() tarea: Tarea;
  @Output() eliminar = new EventEmitter<void>();

  onEliminar() {
    this.eliminar.emit();
  }
}
