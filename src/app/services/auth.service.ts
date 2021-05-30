import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  user; 

  constructor(private afAuth : AngularFireAuth) { 
    this.user = afAuth.user

  }

  addemp(email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
  }

  signIn(email: string,password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  logout(){
    return this.afAuth.signOut()
  }

}
