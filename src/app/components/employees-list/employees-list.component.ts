import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interface/user.interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit, OnDestroy {

  employees : User[]= []
  employeesObservable! : Subscription;
  fname : string | any; 

  constructor(private es : EmployeesService) { }

  ngOnInit() {
    this.employeesObservable = this.es.getAllUsers().subscribe((data: any) => {
     this.employees =  data.map((element:any) =>{
        return{
          uid: element.payload.doc.id,
          ...element.payload.doc.data()
        }
      })
    })
  }

  ngOnDestroy(){
    this.employeesObservable.unsubscribe() 
  }


  delete(e:any, employee:any){
    const empId = employee.uid;
    this.es.delete(empId);
    e.stopPropagation();
  }

  search(){
    if(this.fname != ""){
      this.employees = this.employees.filter(res => {
        return res.fname.toLocaleLowerCase().match(this.fname.toLocaleLowerCase())  || res.lname.toLocaleLowerCase().match(this.fname.toLocaleLowerCase());
      })
    }else if(this.fname == ""){
      this.ngOnInit();
    }
 
    
  }


 

}
