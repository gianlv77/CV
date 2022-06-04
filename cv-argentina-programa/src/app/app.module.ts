import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { IdiomasComponent } from './componentes/idiomas/idiomas.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    EstudiosComponent,
    AcercaDeMiComponent,
    IdiomasComponent,
    HabilidadesComponent,
    ProyectosComponent,
    HeaderComponent,
    ExperienciaLaboralComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
