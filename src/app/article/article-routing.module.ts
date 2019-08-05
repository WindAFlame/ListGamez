import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './detail/detail.component';
import { ArticleListComponent } from './list/list.component';

const articleRoutes: Routes = [
    {
        path: '', children: [
            { path: ':id', component: ArticleDetailComponent },
            { path: '', component: ArticleListComponent }
        ]
    },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forChild(articleRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ArticleRoutingModule { }
