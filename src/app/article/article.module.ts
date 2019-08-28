import { NgModule } from '@angular/core';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleDetailComponent } from './detail/detail.component';
import { ArticleListComponent } from './list/list.component';
import { SharedModule } from '../_other/shared.module';

@NgModule({
    imports: [
        SharedModule,
        ArticleRoutingModule
    ],
    declarations: [
        ArticleListComponent,
        ArticleDetailComponent
    ],
    exports: [
        ArticleRoutingModule
    ]
})
export class ArticleModule { }
