import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { AgregarTareaComponent } from './componentes/agregar-tarea/agregar-tarea.component';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { appRoutes } from './app.routes'; // Asegúrate de importar appRoutes

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    AgregarTareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // Asegúrate de configurar RouterModule correctamente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
