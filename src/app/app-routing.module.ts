import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import {
  NoPreloading,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ActivatechildGuard } from './activatechild.guard';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { BookComponent } from './book/book.component';
import { BookdetailsComponent } from './book/bookdetails/bookdetails.component';
import { CanloadGuard } from './canload.guard';
import { CollegeComponent } from './college/college.component';
import { CollegedetailsComponent } from './collegedetails/collegedetails.component';
import { CollegeregestrationComponent } from './collegeregestration/collegeregestration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerComponent } from './customer/customer.component';
import { CustompreloadingStrategyService } from './custompreloading-strategy.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeactivateGuard } from './deactivate.guard';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { FacultydetailsComponent } from './facultydetails/facultydetails.component';
import { HomeComponent } from './home/home.component';
import { MerchantComponent } from './merchant/merchant.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResolveGuard } from './resolve.guard';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//   { path: '', component: DashboardComponent },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'aboutus', component: AboutusComponent },
//   { path: 'contactus', component: ContactusComponent },

//   { path: 'contactus/:id', component: ContactusComponent },
//   { path: '**', component: PagenotfoundComponent },

//   //1. Nested Routing Example(Not reccomended to use this pattern )
//   { path: 'college', component: CollegeComponent },
//   { path: 'college/details', component: CollegedetailsComponent },
//   { path: 'college/regestration', component: CollegeregestrationComponent },
//   //2.Nested Routing Example( reccomended Way to use this pattern  for nested routings)
//   {
//     path: 'college',
//     children: [
//       { path: '', component: CollegeComponent },
//       {
//         path: 'details',
//         children: [
//           { path: '', component: CollegedetailsComponent },
//           { path: 'faculty', component: FacultydetailsComponent },
//           { path: 'staff', component: StaffdetailsComponent },
//         ],
//       },
//       { path: 'regestration', component: CollegeregestrationComponent },
//     ],
//   },
//   { path: 'book', component: BookComponent },
//   { path: 'bookdetails/:id', component: BookdetailsComponent },
//   { path: 'bookdetails/:id/:price', component: BookdetailsComponent },
// ];

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   {
//     path: 'admin',
//     component: AdminComponent,
//     canActivate: [AuthGuard],
//     // canDeactivate: [DeactivateGuard],
//   },
//   {
//     path: 'merchant',
//     component: MerchantComponent,
//     canDeactivate: [DeactivateGuard],
//   },
//   {
//     path: 'customer',

//     children: [
//       {
//         path: '',
//         component: CustomerComponent,
//       },
//       {
//         path: '',
//         canActivateChild: [ActivatechildGuard],
//         children: [
//           {
//             path: 'add',
//             component: AddcustomerComponent,
//           },
//           { path: 'edit', component: EditcustomerComponent },
//         ],
//       },
//     ],
//   },
//   { path: 'book', component: BookComponent },
//   {
//     path: 'bookdetails/:id',
//     component: BookdetailsComponent,
//     resolve: { objBook: ResolveGuard },
//   },
//   {
//     path: 'bookdetails/:id/:price',
//     component: BookdetailsComponent,
//     resolve: { objBook: ResolveGuard },
//   },
// ];

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   {
//     path: 'admin',
//     component: AdminComponent,
//     data: { id: 1, name: 'Dheeraj' },
//   },
//   {
//     path: 'merchant',
//     component: MerchantComponent,
//   },
//   {
//     path: 'customer',

//     children: [
//       {
//         path: '',
//         component: CustomerComponent,
//       },

//       {
//         path: 'add',
//         component: AddcustomerComponent,
//       },
//       { path: 'edit', component: EditcustomerComponent },
//     ],
//   },
// ];
// const routes: Routes = [
//   { path: '', redirectTo: 'contactus', pathMatch: 'full' },
//   { path: 'contactus', component: ContactusComponent },
//   // {
//   //   path: 'company',
//   //   loadChildren: () =>
//   //     import('../app/company/company.module').then((m) => m.CompanyModule),
//   //   data: { preload: true },
//   // },
//   // {
//   //   path: 'person',
//   //   loadChildren: () =>
//   //     import('../app/person/person.module').then((m) => m.PersonModule),
//   //   data: { preload: true, delay: true },
//   // },
//   {
//     path: 'company',
//     loadChildren: () =>
//       import('../app/company/company.module').then((m) => m.CompanyModule),

//   },
//   {
//     path: 'person',
//     loadChildren: () =>
//       import('../app/person/person.module').then((m) => m.PersonModule),
//     // canLoad: [CanloadGuard],
//   },
//   // { path: 'pagenotfound', component: PagenotfoundComponent },
// ];
const routes: Routes = [];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading }),
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    // RouterModule.forRoot(routes, {
    //   preloadingStrategy: CustompreloadingStrategyService,
    // }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
