import { Routes } from '@angular/router';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { HomeComponent } from './components/home/home.component';
import { TiposComponent } from './components/tipos/tipos.component';

export const routes: Routes = [
{path:'',  component: HomeComponent},
{path:'pokemon',  component: AllPokemonComponent},
{path:'pokemonDetail/:pokemonId',  component: DetailPokemonComponent},
{path:'tipos',  component: TiposComponent},
{path: '**', redirectTo: '', pathMatch: 'full'},




];
