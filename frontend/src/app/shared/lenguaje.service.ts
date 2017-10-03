import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

export class Lenguaje {
  id?: number;
  name: string;
  logo: string;
  rating: number;
}

@Injectable()
export class LenguajeService {
  baseUrl: string;

  constructor(private http: Http) {}

  getLenguajes() {
    return this.http.get(`http://localhost:5000/api/lenguajes`)
      .map(res => res.json().map(this.transformImgPath));
  }

  getLenguaje(id: number) {
    return this.http.get(`http://localhost:5000/api/lenguajes/${id}`)
    .map(res => this.transformImgPath(res.json()));
  }

  addLenguaje(lenguaje: Lenguaje) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers});
    return this.http.post(`http://localhost:5000/api/lenguajes`, lenguaje, options);
  }

  // Server gives back the name of the file, this translates it
  // to something that webpack can understand
  transformImgPath(lenguaje) {
    lenguaje.logo = `assets/images/${lenguaje.logo}`;
    return lenguaje;
  }

}
