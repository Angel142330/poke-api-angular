import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  // constructor(private _httpClient : HttpClient) { }
  private _httpClient = inject(HttpClient);

  public getAllPokemon(): Observable<any[]> {
    return this._httpClient.get<any[]>(this.baseUrl);
  }

  public getAllPokemon2(offset = 0, limit = 14): Observable<any[]> {
    return this._httpClient.get<any[]>(`${this.baseUrl}?offset=${offset}&limit=${limit}`);
  }


  // En tu servicio
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
    return this._httpClient.get<any>(`${this.baseUrl}/${id}`);

  }

}
