import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  public publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  public heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {

    if ( !this.route.url.includes('editar') ) {
      return;
    }

    this.activatedRoute.params
      .pipe( 
        switchMap( ({id}) => this.heroesService.getHeroeId(id) )
      )
      .subscribe( heroe => this.heroe = heroe )
  }

  public guardar(): void {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }
    switch (this.heroe.id) {
      case undefined:
        this.heroesService.agregarHeroe( this.heroe )
          .subscribe( heroe => {
            this.route.navigate(['/heroes/editar', heroe.id] )
          })
        break;
    
      default:
        this.heroesService.actualizarHeroe( this.heroe )
          .subscribe( heroe => {
            console.log('Actualizando', heroe);
            this.heroe = heroe;
          } )
        break;
    }
    
  }

  public borrar(): void {
    this.heroesService.borrarHeroe( this.heroe.id! )
      .subscribe( resp => {
        this.route.navigate(['/heroes'])
      })
  }

}
