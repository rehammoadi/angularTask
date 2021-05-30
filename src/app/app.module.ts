import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditcustomerComponent } from './components/editcustomer/editcustomer.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { CarInsuranceComponent } from './components/car-insurance/car-insurance.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ShowCustomerComponent } from './components/show-customer/show-customer.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeesListComponent,
    NavbarComponent,
    AddCustomerComponent,
    AddEmployeeComponent,
    CarInsuranceComponent,
    NotFoundPageComponent,
    CustomersListComponent,
    ShowCustomerComponent,
    EditcustomerComponent
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
