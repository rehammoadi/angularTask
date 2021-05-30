import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Customer } from '../interface/customer.interface';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private fs: AngularFirestore, private toster : ToastrService, private router : Router) { }

  customerDoc: AngularFirestoreDocument<Customer> | undefined;
  custmer : any


  getAllCustomers(){
    return this.fs.collection('customer').snapshotChanges()
  }

  addNewCustomer(data : any){
    const cst = this.fs.collection('customer').add(data).then(() => console.log('done')).catch(err => 
      console.log(err));
     
  }

  deleteCustomer(customerId: any){
    console.log(customerId)
    if(confirm('Are you sure you want to delete this record?!')){
      this.fs.collection("customer").doc(customerId).delete().then(() => this.toster.success('This Record Was Deleted!', 'customer!')).catch(
        err => {
          this.toster.warning('can not delete this record!')
        }
      )
    }
  }

  async getCustomerById(id : any){
     console.log('test3', id)
     return this.fs.collection('customer').doc(id).ref.get()
  }
  editcustomer(id : any){
    return this.fs.collection('customer').doc(id).ref.get()
  }

  updateCustomer(customerid : any, customerdata : any){
    console.log('customer data', customerdata)
    this.fs.collection("customer").doc(customerid).update(customerdata).then(() => 
    {
      this.toster.success('This Record Was Updated!', 'customer!')
       console.log('hhhhhhhhhyyyyy',customerid)
      this.router.navigate([ '/customerlist']);
    }
    ).catch(err => {
      this.toster.warning('can not updated this record!', err)
     })
  }
    

  
}
