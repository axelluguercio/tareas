import { Routes } from '@angular/router';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { AgregarTareaComponent } from './componentes/agregar-tarea/agregar-tarea.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: 'tareas', component: TareasComponent },
  { path: 'agregar-tarea', component: AgregarTareaComponent }
];
