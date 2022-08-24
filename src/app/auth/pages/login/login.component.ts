import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor( private router: Router,
               private authService: AuthService ) { }

  public login(): void {
    this.authService.login()
      .subscribe( resp => {
        if (resp.id) {
          this.router.navigate(['/heroes'])
          console.log(resp);
        }
      })
  }
}
