import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const homeRouters : Routes = [
{
  path: '',
  children:[
    {
      path: '',
      component: HomeComponent
	}
	
  ]
}
];

@NgModule({
  
  imports: [
    RouterModule.forChild(homeRouters)
  ],
  exports:[
    [RouterModule]
  ],
  declarations: []
})
export class HomeRoutingModule { }
