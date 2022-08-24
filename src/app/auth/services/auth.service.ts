import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  public login(): Observable<Auth> {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`);
  }
}
