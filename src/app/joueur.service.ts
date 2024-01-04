import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JoueurService {
  readonly API_URL = 'http://localhost:8080';

  readonly ENDPOINT_CARS = '/joueurs'; //récupère la liste des joueurs

  constructor(private httpClient: HttpClient) {}

  getJoueurs() {
    return this.httpClient.get(this.API_URL + this.ENDPOINT_CARS);
  }
}
