import { NgModule } from '@angular/core';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleDetailComponent } from './detail/detail.component';
import { SharedModule } from '../_other/shared.module';
import { ArticleListComponent } from './list/list.component';
import { ArticleListAlertComponent } from './list/alert/alert.component';
import { ArticleListRowGameComponent } from './list/game/game.component';
import { ArticleExistResolver } from './article-exist.resovler';

@NgModule({
    imports: [
        SharedModule,
        ArticleRoutingModule
    ],
    providers: [
        ArticleExistResolver
    ],
    declarations: [
        ArticleListComponent,
        ArticleListRowGameComponent,
        ArticleListAlertComponent,
        ArticleDetailComponent
    ],
    exports: [
        ArticleRoutingModule
    ]
})
export class ArticleModule { }
