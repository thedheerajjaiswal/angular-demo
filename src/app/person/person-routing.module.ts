import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanloadGuard } from '../canload.guard';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person.component';

const routes: Routes = [
  {
    path: '',

    children: [
      { path: '', component: PersonComponent },
      { path: 'person-list', component: PersonListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonRoutingModule {}
