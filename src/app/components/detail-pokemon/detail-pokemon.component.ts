import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { PokemonTypesService } from '../../services/pokemon-types.service';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent {
  pokemon?: any;
  loading: boolean = true;
  error?: string;
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);
  public _typeService = inject(PokemonTypesService);

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getPokemon((params['pokemonId'])).subscribe({
          next: (data: any) => {
            console.log(data);
            
              this.pokemon = data
              this.loading = false
            
          },
          error: (error: any) => {
            this.error = 'ESE POKEMON NO EXISTE';
            this.loading = false
          }
        })
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }



}
