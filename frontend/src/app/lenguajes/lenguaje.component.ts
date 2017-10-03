import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Lenguaje } from '../shared/lenguaje.service';

@Component({
  selector: 'app-lenguaje',
  templateUrl: './lenguaje.component.html',
  styleUrls: ['./lenguaje.component.css']
})
export class LenguajeComponent {
  @Input() lenguaje: Lenguaje;
  isBig = false;

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['lenguajes']);
  }

}
