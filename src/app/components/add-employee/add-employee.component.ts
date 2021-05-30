import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  errorMessage: string ='';

  constructor(private as : AuthService, private es: EmployeesService, private router: Router) { }

  ngOnInit(): void {
  }

   addemp(form : any){
    console.log(form);
    let data: User =  form.value;
    this.as.addemp(data.email,data.password)
    .then( result => {
      let userid = result.user?.uid;
      this.errorMessage = '';
      this.es.addNewEmployee(userid, data.fname, data.lname, data.phone , data.email, data.username,data.userid)
      .then(() => {
        this.router.navigate(['/emoplyeelist'])
      })
    })
    .catch(err => {
      console.log(err)
      this.errorMessage = err.message;
    })
  }

}
