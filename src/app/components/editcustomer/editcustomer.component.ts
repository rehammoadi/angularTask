import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';



@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {

  customerdata : any
  customer : any
  id : any
  fname : any
  lname : any
  address : any
  phone : any

  constructor(private router : ActivatedRoute, private cs : CustomerService) { }

  ngOnInit(): void {
      this.id = this.router.snapshot.paramMap.get('id');
       this.cs.editcustomer(this.id).then(data => {

          this.fname = data.get("fname");
          this.lname = data.get("lname");
          this.address = data.get("address");
          this.phone = data.get("phone");

        }).catch(err => console.log(err))
  }

  updateCustomer(form : any){
    console.log(form.value);
    console.log(form);

    /*
    this.id = this.router.snapshot.paramMap.get('id');
    const customerid = this.id;
    console.log('updating data', this.customerdata)
    this.cs.updateCustomer(customerid, form)*/
  }

  // delete(e: any, customer: any){
  //   const customerid = customer.uid;
  //   this.cs.deleteCustomer(customerid);
  //   e.stopPropagation();

  // }

}
