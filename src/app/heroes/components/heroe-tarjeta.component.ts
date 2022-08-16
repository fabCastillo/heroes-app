import { Component, Input } from "@angular/core";
import { Heroe } from "../interfaces/heroes.interface";

@Component({
    selector: 'app-heroe-tarjeta',
    templateUrl: 'heroe-tarjeta.component.html',
    styles: [`
        mat-card {
            margin-top: 15px;
        }
    `]
})
export class HeroeTarjetaComponent {
    @Input() public heroe!: Heroe;
}