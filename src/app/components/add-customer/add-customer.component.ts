import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interface/customer.interface';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  errorMessage: string ='';

  constructor(private as : AuthService, private cs: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  addcustomer(form : any){
    let data : Customer = form.value;
    console.log(data)
    this.cs.addNewCustomer(data)
    this.router.navigate(['/customerlist'])

  }

}


