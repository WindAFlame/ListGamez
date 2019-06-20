import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './article/detail/detail.component';
import { ListComponent } from './article/list/list.component';

const appRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: 'view/:id', component: DetailComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
