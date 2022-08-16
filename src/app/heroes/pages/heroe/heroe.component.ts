import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  constructor( private activateRouter: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activateRouter.params
      .subscribe( ({ id }) => console.log(id) )
  }

}
