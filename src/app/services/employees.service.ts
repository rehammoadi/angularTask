import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private fs: AngularFirestore, private toster: ToastrService) { }

  

  getAllUsers(){
    return this.fs.collection('users').snapshotChanges()
  }

   addNewEmployee(uid : string | undefined, fname: string, lname: string, phone : string, email: string, username: string, userid:string){
    const usr = this.fs.collection('users').doc(uid)
    return  usr.set({
      fname,
      lname,
      phone,
      email,
      username,
      userid
    })
   }

   delete(empId : any){
    if(confirm('Are you sure you want to delete this record?!')){
      this.fs.collection("users").doc(empId).delete().then(() => this.toster.warning('This Record Was Deleted!', 'EMPLOYEE!')).catch(
        err => {
          this.toster.warning('can not delete this record!')
        }
      )
    }
   }

   
}
