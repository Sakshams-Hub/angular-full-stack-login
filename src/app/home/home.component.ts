import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  username: string | null = '';

  constructor(private authService: AuthService,private router : Router) {}

  ngOnInit() {
    // Retrieve the username from the authentication service
    this.username = this.authService.getLoggedInUser();
  }

  logout() {
    
    this.authService.logout();
    this.router.navigate(['login']); 
    
  }

  login() {
    this.router.navigate(['/login']);
  }

  signup() {
    this.router.navigate(['/register']);
  }

}
