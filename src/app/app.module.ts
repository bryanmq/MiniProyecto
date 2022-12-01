import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroeComponent } from './components/heroe/heroe.component';

const routes : Routes = [
  {path : "", component: MainComponent},
  {path : "proyecto/:id", component: ProyectoComponent},
  {path : "acerca", component: AcercaComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ProyectoComponent,
    AcercaComponent,
    MainComponent,
    ProyectosComponent,
    HeaderComponent,
    FooterComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
