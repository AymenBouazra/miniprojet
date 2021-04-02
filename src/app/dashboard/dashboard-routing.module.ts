import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from '../page404/page404.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DashboardComponent } from './dashboard.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-contact', component:AddContactComponent},
  { path: 'update-contact/:id', component:UpdateContactComponent},
  { path: '**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
