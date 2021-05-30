import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string ='';

  constructor(private auths : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  login(form:any){
    let data = form.value;
    console.log(data.username)
    this.auths.signIn(data.username,data.password).then(() => {this.router.navigate(['/home'])}).catch(err => {
      this.errorMessage = err.message;
    })
  }

}
