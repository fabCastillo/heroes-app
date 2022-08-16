import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px
    }
  `]
})
export class HeroeComponent implements OnInit {
  
  public heroe!: Heroe;
  
  constructor( private activateRouter: ActivatedRoute,
               private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.activateRouter.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroeId( id ) )
      )
      .subscribe ( heroe => this.heroe = heroe )
  }

}
