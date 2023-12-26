import { Injectable, Type } from '@angular/core';
import { type } from 'os';

@Injectable({
  providedIn: 'root'
})
export class PokemonTypesService {



  
  pokemonTypes:string[] = ['fire', 'water', 'bug', 'psychic', 'normal', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'rock', 'ghost', 'dark', 'dragon', 'steel', 'fairy'];

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
