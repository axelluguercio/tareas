import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { AgregarTareaComponent } from './componentes/agregar-tarea/agregar-tarea.component';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    AgregarTareaComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot([]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
