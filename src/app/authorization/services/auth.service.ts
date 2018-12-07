import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLoggedIn(): Boolean {
    if (localStorage.getItem('authed')) {
      return true;
    }
    return false;
  }
}
