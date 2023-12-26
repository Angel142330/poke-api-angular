import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { PokemonTypesService } from '../../services/pokemon-types.service';

@Component({
  selector: 'app-tipos',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tipos.component.html',
  styleUrl: './tipos.component.css'
})
export class TiposComponent {


  public _typeService = inject(PokemonTypesService);
  private _apiService = inject(ApiService);
  pokemons: any = [];
  loading: boolean = true;
  error: string = '';


  buscarPokemonPorTipo(tipo: string) {
    this._apiService.getPokemonByType(tipo).subscribe({
      next: (data: any) => {
        this.pokemons = data.pokemon;
        this.loading = false;
        this.pokemons.forEach((pokemon: any) => {
          this._apiService.getPokemonDetails(pokemon.pokemon.url).subscribe({
            next: (details: any) => {
              // console.log(pokemon.details);
              pokemon.details = details;
              this.loading=false;

            },
            error: (error: any) => {
              this.loading=false;
              console.error('Error obteniendo detalles del Pokémon:', error);
            }
          });
        });
      },
      error: (error: any) => {
        this.error = 'ESE TIPO DE POKEMON NO EXISTE';
        this.loading = false;
      }
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
