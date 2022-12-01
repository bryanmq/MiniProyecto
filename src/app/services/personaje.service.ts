import { Injectable } from '@angular/core';
import { Heroe } from '../Heroe';
import { listaHeroes } from '../datos';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  listaHeroes : Heroe[] = listaHeroes;
  constructor() { }

  getHeroes(): Heroe[]{
    return this.listaHeroes;
  }

  getHeroe(id: number): Heroe | undefined{
    return this.listaHeroes.find((x)=>x.id===id);
  }
}
