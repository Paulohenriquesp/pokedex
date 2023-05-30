import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'

  constructor(private http: HttpClient) { }

  public getPokemonList() {

  }
}
