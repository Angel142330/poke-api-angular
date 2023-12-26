import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-pokemon',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './all-pokemon.component.html',
  styleUrl: './all-pokemon.component.css'
})
export class AllPokemonComponent {

  pokemon :any=[];
  name:string='';
  offset: number = 0; 
  limit: number = 14; 

private _apiservice = inject(ApiService);


ngOnInit(): void {
  
  // this._apiservice.getAllPokemon().subscribe((data: any[]) =>{
  //   this.pokemon= data;
    //console.log(this.pokemon);
// })
this.offset = this._apiservice.getOffset(); // Recupera el offset al iniciar
this.loadPokemon();
}

loadPokemon() {
  this._apiservice.getAllPokemon2(this.offset, this.limit).subscribe((data: any[]) => {
    this.pokemon = data;
    this._apiservice.setOffset(this.offset);
  });
}

// método para cargar la siguiente página
nextPage() {
  this.offset += this.limit;
  this.loadPokemon();
}

//  método para cargar la página anterior
previousPage() {
  this.offset = Math.max(this.offset - this.limit, 0);
  this.loadPokemon();
}





}
