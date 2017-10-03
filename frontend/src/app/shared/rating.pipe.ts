import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: number): string {
    switch(value) {
      case 1:
        return 'Ni con tu teclado';
      case 2:
        return 'Ni fu ni fa';
      case 3:
        return 'Chachi que si';
      default:
        return 'Rating incorrecto';
    }
  }

}
