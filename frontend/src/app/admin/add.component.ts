import { Router } from '@angular/router';
import { Lenguaje, LenguajeService } from '../shared/lenguaje.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-add',
  templateUrl: './add.component.html',
  styles: [`
    label {
      font-weight: normal;
    }
  `]
})
export class AdminAddComponent {
  lenguaje: Lenguaje = {
    name: '',
    logo: '',
    rating: 3
  };

  constructor(private service: LenguajeService, private router: Router) {}

  add() {
    this.service.addLenguaje(this.lenguaje as Lenguaje).subscribe(_ => {
      this.router.navigate(['/lenguajes']);
    });
  }
}
