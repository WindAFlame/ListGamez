import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './article/list/list.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: ListComponent },
  // { path: 'list', component: ListComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
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
