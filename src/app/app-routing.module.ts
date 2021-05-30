import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { CarInsuranceComponent } from './components/car-insurance/car-insurance.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { EditcustomerComponent } from './components/editcustomer/editcustomer.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ShowCustomerComponent } from './components/show-customer/show-customer.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'emoplyeelist', component: EmployeesListComponent },
  { path: 'customerlist', component: CustomersListComponent },
  { path: 'carinsurance', component: CarInsuranceComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'addcustomer', component: AddCustomerComponent },
  { path: 'editcustomer', component: EditcustomerComponent },
  { path: 'showcustomer/:id', component: ShowCustomerComponent },
  { path: 'editcustomer/:id', component: EditcustomerComponent },


  { path: '**', component:  NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
