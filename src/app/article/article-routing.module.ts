import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleExistResolver } from './article-exist.resovler';
import { ArticleDetailComponent } from './detail/detail.component';
import { ArticleListComponent } from './list/list.component';

const articleRoutes: Routes = [
    { path: '', component: ArticleListComponent },
    { path: 'view/:id', component: ArticleDetailComponent, resolve: { game: ArticleExistResolver } }
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
