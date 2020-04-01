import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes : Routes =[
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule' 
  },
  {
    path: 'customer',
    loadChildren: './customer/customer.module#CustomerModule' 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  //path por defecto
  {
    path:'', 
    redirectTo: '/login', 
    pathMatch:'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
