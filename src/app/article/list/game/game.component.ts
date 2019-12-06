import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from 'src/app/_other/article/game.class';

@Component({
    selector: 'tr[app-article-list-row-game]',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class ArticleListRowGameComponent implements OnInit {

    @Input() game: Game;
    @Output() articleId = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
    }

    public view(id: number) {
        this.articleId.emit(id);
    }

}
