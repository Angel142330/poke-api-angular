import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseUrl = 'https://pokeapi.co/api/v2/';

  // constructor(private _httpClient : HttpClient) { }
  private _httpClient = inject(HttpClient);

  public getAllPokemon2(offset = 0, limit = 14): Observable<any[]> {
    return this._httpClient.get<any[]>(`${this.baseUrl}pokemon?offset=${offset}&limit=${limit}`);
  }


  public setOffset(offset: number) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('offset', offset.toString());
    }
  }

  public getOffset(): number {
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('offset')) || 0;
    }
    return 0;
  }


  public getPokemon(id: number | string): Observable<any> {
    return this._httpClient.get<any>(`${this.baseUrl}pokemon/${id}`);

  }
  public getPokemonDetails(url: string): Observable<any> {
    return this._httpClient.get<any>(url);
}


  public getPokemonByType(type: string, offset = 0, limit = 14): Observable<any[]> {
    return this._httpClient.get<any[]>(`${this.baseUrl}type/${type}?offset=${offset}&limit=${limit}`);
  }



}
