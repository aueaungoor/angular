import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './page2/page-list/page-list.component';
import { MainpageComponent } from './mainpage/mainpage.component';
const routes: Routes = [
  {
    path:'',
    component:MainpageComponent
  },
  {
    path:'page2',
    component:PageListComponent
  },
  {
    path:'mainpage',
    component:MainpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
