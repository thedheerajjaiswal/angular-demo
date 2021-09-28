import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';

import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';

@NgModule({
  declarations: [CompanyComponent, CompanyListComponent],
  imports: [CommonModule, CompanyRoutingModule],
})
export class CompanyModule {}
console.log('I am Copmany Module');
