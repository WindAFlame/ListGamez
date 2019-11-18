import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './detail/detail.component';
import { ArticleListComponent } from './list/list.component';
import { ArticleListtComponent } from './list.2/list.component';
import { ArticleExistResolver } from './article-exist.resovler';

const articleRoutes: Routes = [
    {
        path: '', children: [
            { path: ':id', component: ArticleDetailComponent, resolve: { game: ArticleExistResolver } },
            { path: '', component: ArticleListtComponent }
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
