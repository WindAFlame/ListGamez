import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/_other/article/article.class';
import { LibraryService } from 'src/app/_other/library.service';
import { ArticleType } from '../../_other/article/article-type.enum';
import { Router } from '@angular/router';

@Component({
    selector: 'app-article-listt',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ArticleListComponent implements OnInit {

    public AT = ArticleType;
    public articles: Article[] = [];
    public showTable = false;

    constructor(
        private library: LibraryService,
        private route: Router
    ) { }

    ngOnInit() {
        this.library.library$.subscribe(datas => {
            this.showTable = (datas && datas.length > 0);
            if (this.showTable) {
                this.articles = datas;
            }
        });
    }

    public getArticleSize(size: number): string {
        return size ? size.toString() : null;
    }

    public viewArticle(id: number) {
        this.route.navigate(['/', 'view', id]);
    }

}
