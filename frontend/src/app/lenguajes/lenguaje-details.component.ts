import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Lenguaje, LenguajeService } from '../shared/lenguaje.service';

@Component({
  selector: 'app-lenguaje-details',
  templateUrl: './lenguaje-details.component.html',
  styleUrls: ['./lenguaje-details.component.css']
})
export class LenguajeDetailsComponent implements OnInit {
  lenguaje: Lenguaje;
  lengId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private lenguajeService: LenguajeService
  ) {
    this.lengId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.lenguajeService.getLenguaje(this.lengId).subscribe(lang => this.lenguaje = lang);
  }

}
