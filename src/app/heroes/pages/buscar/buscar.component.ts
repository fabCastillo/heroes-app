import { Component, OnInit } from '@angular/core';
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
  
  constructor(
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
  }

  public buscando(): void {
    this.heroesService.getHeroes()
      .subscribe( heroe => this.heroes = heroe );
  }
}
