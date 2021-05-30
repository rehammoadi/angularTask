import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen : boolean = false;
  isUser : boolean = false;

  constructor(private as : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.as.user.subscribe(user => {
      if(user){
        this.isUser = true;
      }else{
        this.isUser = false
      }
    })
  }

  toggleNavbar(){
    this.isOpen = !this.isOpen; 
  }

  logout(){
    this.as.logout().then(() => {
      console.log('out')
      this.router.navigate(['/']);

    })
  }

}
