import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const customerRouters : Routes = [
  {
    path:'',
    children: [
      {
        path:'',
        component: CustomerListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(customerRouters)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerRoutingModule { }
