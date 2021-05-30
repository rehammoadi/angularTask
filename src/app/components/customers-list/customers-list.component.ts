import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router , ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/interface/customer.interface';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit, OnDestroy {

  customers : Customer[] = [];
  customersObservable! : Subscription;
  fname : string | any; 



  constructor(private cs : CustomerService, private fs : AngularFirestore, private router : Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.customersObservable = this.cs.getAllCustomers().subscribe((data : any) =>{
      this.customers = data.map((element:any) => {
        return{
          uid: element.payload.doc.id,
          ...element.payload.doc.data()

        }
      })

    })
  }

  ngOnDestroy(): void {
    this.customersObservable.unsubscribe();
  }

  

  edit(e: any, customer : any){
    let customerId = customer.uid;
     this.router.navigate([ '/editcustomer', customerId]);
     e.stopPropagation();
  }

  delete(e: any, customer: any){
    const customerid = customer.uid;
    this.cs.deleteCustomer(customerid);
    e.stopPropagation();

  }

  searchcustomer(){
    if(this.fname != ""){
      this.customers = this.customers.filter(resulst => {
        return resulst.fname.toLocaleLowerCase().match(this.fname.toLocaleLowerCase())  || resulst.lname.toLocaleLowerCase().match(this.fname.toLocaleLowerCase());
      })
    }else if(this.fname == ""){
      this.ngOnInit();
    }
  }

 

  showCustomer(e :any, customer: any){
    let customerId = customer.uid;
    console.log('customer details', customer)
    console.log('customer id', customerId)
     this.router.navigate([ '/showcustomer', customerId]);
     e.stopPropagation();

  }


}
