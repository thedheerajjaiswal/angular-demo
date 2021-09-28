import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display } from './display';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { InterpolationExampleComponent } from './interpolation-example/interpolation-example.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { DataBindingExampleComponent } from './data-binding-example/data-binding-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { WelcomePipe } from './welcome.pipe';
import { BoldPipe } from './bold.pipe';
import { ReversePipe } from './reverse.pipe';
import { LimitwordsPipe } from './limitwords.pipe';
import { ParentDecoratorComponent } from './parent-decorator/parent-decorator.component';
import { ChildDecoratorComponent } from './child-decorator/child-decorator.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
// import { MessageserviceService } from './messageservice.service';
// import { OthermessageService } from './othermessage.service';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CollegeComponent } from './college/college.component';
import { CollegedetailsComponent } from './collegedetails/collegedetails.component';
import { CollegeregestrationComponent } from './collegeregestration/collegeregestration.component';
import { FacultydetailsComponent } from './facultydetails/facultydetails.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { BookComponent } from './book/book.component';
import { BookdetailsComponent } from './book/bookdetails/bookdetails.component';
import { AdminComponent } from './admin/admin.component';
import { MerchantComponent } from './merchant/merchant.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import {
  HttpClientInMemoryWebApiModule,
  InMemoryWebApiModule,
} from 'angular-in-memory-web-api';
import { Testdb } from './testdb';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { PersonModule } from './person/person.module';
// import { CompanyModule } from './company/company.module';

import { AngularmaterialExampleComponent } from './angularmaterial-example/angularmaterial-example.component';
import { MaterialModule } from './material/material.module';
import { BootstrapExampleComponent } from './bootstrap-example/bootstrap-example.component';
import { Testdata } from './testdata';
import { HttpclientexampleComponent } from './httpclientexample/httpclientexample.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    InterpolationExampleComponent,
    ParentComponent,
    ChildComponent,
    NgIfExampleComponent,
    ThreeComponent,
    FourComponent,
    NgForExampleComponent,
    NgSwitchExampleComponent,
    NgStyleExampleComponent,
    NgClassExampleComponent,
    DataBindingExampleComponent,
    PipesExampleComponent,
    WelcomePipe,
    BoldPipe,
    ReversePipe,
    LimitwordsPipe,
    ParentDecoratorComponent,
    ChildDecoratorComponent,
    StudentComponent,
    FacultyComponent,
    TemplateformComponent,
    ServiceExampleComponent,
    Comp1Component,
    Comp2Component,
    DashboardComponent,
    ContactusComponent,
    AboutusComponent,
    PagenotfoundComponent,
    CollegeComponent,
    CollegedetailsComponent,
    CollegeregestrationComponent,
    FacultydetailsComponent,
    StaffdetailsComponent,
    BookComponent,
    BookdetailsComponent,
    AdminComponent,
    MerchantComponent,
    CustomerComponent,
    HomeComponent,
    AddcustomerComponent,
    EditcustomerComponent,
    ReactiveformComponent,
    RegistrationFormComponent,
    AngularmaterialExampleComponent,
    BootstrapExampleComponent,
    HttpclientexampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(Testdb),
    InMemoryWebApiModule.forRoot(Testdata),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,

    // PersonModule,
    // CompanyModule,
  ],
  // providers: [MessageserviceService],
  // providers: [OthermessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
