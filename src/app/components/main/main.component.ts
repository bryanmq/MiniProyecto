import { Component } from '@angular/core';
import { Heroe } from 'src/app/Heroe';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  listaHeroes! : Heroe[];

  constructor(private personajeService: PersonajeService){

  }

  ngOnInit(): void{
   this.listaHeroes = this.personajeService.getHeroes();
  }
}



// import { Component } from '@angular/core';
// import { Heroe } from 'src/app/Heroe';
// import { PersonajeService } from 'src/app/services/personaje.service';
// @Component({
//   selector: 'app-heroes',
//   templateUrl: './principal.component.html',
//   styleUrls: ['./heroes.component.css']
// })
// export class PrincipalComponent {
//   listaHeroes! : Heroe[];

//   constructor(private personajeService: PersonajeService){}


//   ngOnInit(): void{
//    this.listaHeroes = this.personajeService.getHeroes();
//   }

// }
