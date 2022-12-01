import { Injectable } from '@angular/core';
import { listaProyectos } from '../datos';
import { Proyecto } from '../Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  listaHeroes : Proyecto[] = listaProyectos;
  constructor() { }

  getProyectos(): Proyecto[]{
    return this.listaHeroes;
  }

  getProyecto(id: number): Proyecto | undefined{
    return this.listaHeroes.find((x)=>x.id===id);
  }
}
