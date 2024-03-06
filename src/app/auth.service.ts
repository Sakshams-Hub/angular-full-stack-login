import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private loggedInUser: string  | null= null;

  setLoggedInUser(username: string) {
    this.loggedInUser = username;
  }

  getLoggedInUser(): string | null {
    return this.loggedInUser;
  }

  logout() {
  
  this.loggedInUser = null;
  
}

  
}
