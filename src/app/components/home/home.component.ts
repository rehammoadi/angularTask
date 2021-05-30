import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/interface/customer.interface';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customers : Customer[] = [];
  customersObservable! : Subscription;
  today = new Date();

  constructor(private cs : CustomerService) { }

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

}
