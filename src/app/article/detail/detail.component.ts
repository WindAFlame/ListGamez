import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DownloadLinkType } from 'src/app/_other/article/download-link-type.enum';
import { Game } from 'src/app/_other/article/game.class';

@Component({
    selector: 'app-article-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

    public DownloadLinkType = DownloadLinkType;
    public game: Game;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.data.subscribe(data => this.game = data.game);
    }

}
