import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/_other/article/article.class';
import { LibraryService } from 'src/app/_other/library.service';
import { ArticleType } from '../../_other/article/article-type.enum';

@Component({
    selector: 'app-article-listt',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ArticleListtComponent implements OnInit {

    public AT = ArticleType;
    public articles: Article[] = [];
    public showTable = false;

    constructor(
        private library: LibraryService
    ) { }

    ngOnInit() {
        this.library.library$.subscribe(datas => {
            this.articles = datas;
            this.showTable = true;
        });
    }

    public getArticleSize(size: number): string {
        return size ? size.toString() : null;
    }

}
