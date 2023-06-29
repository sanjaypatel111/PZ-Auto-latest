import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './shared/components/default-layout/default-layout.component';

const routes: Routes = [
  // {
  //   path: '',    
  //   loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)
  // },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)
      }, 
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)
      },       
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
