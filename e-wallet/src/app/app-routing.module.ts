import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { DashboardlayoutComponent } from './Layout/dashboardlayout/dashboardlayout.component';
import { MainlayoutComponent } from './Layout/mainlayout/mainlayout.component';

const routes: Routes =
[
  {
    path:'',
    component:MainlayoutComponent,
    children:[
    {
      path:'',
      redirectTo:'/',
      pathMatch:'full',
    },
    {
      path:'',
      loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)
    },
    ],
  },

{
  path:'dashboard',
  component:DashboardlayoutComponent,
  children:[
  {
    path:'',
    redirectTo:'/',
    pathMatch:'full',
  },
  {
    path:'',
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  ],
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
