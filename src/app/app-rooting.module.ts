import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article/detail/detail.component';
import { ArticleListComponent } from './article/list/list.component';

const appRoutes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'view/:id', component: ArticleDetailComponent },
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
