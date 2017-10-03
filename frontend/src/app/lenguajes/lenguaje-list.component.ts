import { Component, OnInit } from '@angular/core';

import { Lenguaje, LenguajeService } from '../shared/lenguaje.service'

@Component({
  selector: 'app-lenguaje-list',
  templateUrl: './lenguaje-list.component.html',
  styleUrls: ['./lenguaje-list.component.css']
})
export class LenguajeListComponent implements OnInit {

  lenguajes: Lenguaje[] = [];

  constructor(private lengService: LenguajeService) { }

  ngOnInit() {
    this.lengService.getLenguajes()
      .subscribe((lenguajes) => this.lenguajes = lenguajes);
  }

}
