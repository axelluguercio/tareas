import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule
import { AppComponent } from './app.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { AgregarTareaComponent } from './componentes/agregar-tarea/agregar-tarea.component';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './app.routes';  // Importa las rutas definidas

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    AgregarTareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)  // Configura el router para usar las rutas definidas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
