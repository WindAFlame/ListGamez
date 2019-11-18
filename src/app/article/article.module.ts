import { NgModule } from '@angular/core';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleDetailComponent } from './detail/detail.component';
import { ArticleListComponent } from './list/list.component';
import { SharedModule } from '../_other/shared.module';
import { ArticleListtComponent } from './list.2/list.component';
import { ArticleListAlertComponent } from './list.2/alert/alert.component';
import { ArticleListRowGameComponent } from './list.2/game/game.component';
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
        ArticleListtComponent,
        ArticleListRowGameComponent,
        ArticleListAlertComponent,
        ArticleDetailComponent
    ],
    exports: [
        ArticleRoutingModule
    ]
})
export class ArticleModule { }
