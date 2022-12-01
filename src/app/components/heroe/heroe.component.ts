import { Component } from '@angular/core';
import { Heroe } from 'src/app/Heroe';
import { PersonajeService } from 'src/app/services/personaje.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  heroe!: Heroe | undefined;
  idHeroe = 1

  constructor(
    private heroeService: PersonajeService
    ) {}

  ngOnInit(): void {

    this.heroe = this.heroeService.getHeroe(this.idHeroe);
  }
}
