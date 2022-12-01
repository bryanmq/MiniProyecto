import { Component } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { ProyectoService } from "../../services/proyecto.service";
import { Proyecto } from 'src/app/Proyecto';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  proyecto!: Proyecto | undefined;
  idProyecto : number | undefined;

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.idProyecto = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.proyecto = this.proyectoService.getProyecto(this.idProyecto);
  }
}
