import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { AgregarTareaComponent } from './componentes/agregar-tarea/agregar-tarea.component';
import { TareaItemComponent } from './componentes/tarea-item/tarea-item.component';
import { TareaService } from './servicios/tarea.service';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    AgregarTareaComponent,
    TareaItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
