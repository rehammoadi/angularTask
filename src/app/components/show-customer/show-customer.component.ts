import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/interface/customer.interface';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  customer : any
  fname : any
  lname : any
  address : any
  phone : any
  userid : any
  birthday : any

  constructor(private router : ActivatedRoute, private cs : CustomerService) { }
  
  ngOnInit(): void {
    
    const id = this.router.snapshot.paramMap.get('id');
    console.log('getting id', id)
    this.cs.getCustomerById(id).then(data => {
      //this.customer = data.data()
      this.fname = data.get("fname");
      this.lname = data.get("lname");
      this.address = data.get("address");
      this.phone = data.get("phone");
      this.userid = data.get("userid");
      this.birthday = data.get("birthday");
      console.log('data of customer', this.fname)
    }).catch(err => console.log(err))
  }

}