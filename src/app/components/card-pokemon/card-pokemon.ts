import { NgClass } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { mapeamentoDeCoresPorTipo } from '../../util/mapeamento-de-cores-por-tipo';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-card-pokemon',
  imports: [NgClass],
  template: `
  @if(pokemon){
    <div class="card p-3 text-center">

    <a class="text-decoration-none"></a>
      <h5 class="card-title">{{ pokemon.nome }}</h5>

      <div class="d-flex justify-content-center gap-2">
        @for (tipo of pokemon.tipos; track $index) {
        <span
          class="badge rounded-pill text-light fs-6"
          [ngClass]="mapeamentoDeCoresPorTipo[tipo]"
          >{{ tipo }}</span
        >
        }
      </div>

      <img [src]="pokemon.urlSprite" [alt]="pokemon.nome" />
    </div>
      }
  `,
})
export class CardPokemon {
  public mapeamentoDeCoresPorTipo = mapeamentoDeCoresPorTipo;

  @Input() public exibirLink: boolean = false;
  @Input({ required: true }) public pokemon?: Pokemon;
}
