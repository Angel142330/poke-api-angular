import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

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

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getPokemon((params['pokemonId'])).subscribe({
          next: (data: any) => {
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

  getColorClass(type: string): string {
  const colors:any = {
    'bug': 'bg-green-500',
    'dark': 'bg-gray-800',
    'dragon': 'bg-indigo-800',
    'electric': 'bg-yellow-300',
    'fairy': 'bg-pink-400',
    'fighting': 'bg-red-500',
    'fire': 'bg-red-600',
    'flying': 'bg-indigo-300',
    'ghost': 'bg-purple-700',
    'grass': 'bg-green-600',
    'ground': 'bg-yellow-600',
    'ice': 'bg-blue-300',
    'normal': 'bg-gray-400',
    'poison': 'bg-purple-600',
    'psychic': 'bg-pink-600',
    'rock': 'bg-yellow-900',
    'steel': 'bg-gray-500',
    'water': 'bg-blue-500'
  };
  return colors[type.toLowerCase()];
}

}
