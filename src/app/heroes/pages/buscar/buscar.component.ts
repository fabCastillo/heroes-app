import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  
  public termino: string = '';
  public heroes: Heroe[] = [];
  public heroeSeleccionado!: Heroe;
  
  constructor(
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
  }

  public buscando(): void {
    this.heroesService.getSugerencias( this.termino )
      .subscribe( heroe => this.heroes = heroe );
  }

  public opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {
    const heroe: Heroe  = event.option.value || undefined;    
    switch ( heroe ) {
      case undefined:
          this.heroeSeleccionado = heroe;
        break;
    
      default:
        this.termino = heroe.superhero;
        this.heroesService.getHeroeId( heroe.id! )
          .subscribe( heroe => this.heroeSeleccionado = heroe );
        break;
    }
  }
}
