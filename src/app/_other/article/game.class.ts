import { Type } from 'class-transformer';
import { ArticleType } from './article-type.enum';
import { Article } from './article.class';
import { DownloadLink } from './download-link.class';
import { GameInterface } from './game.interface';

export class Game extends Article implements GameInterface {

    public name: string;
    @Type(() => DownloadLink)
    public summary = 'No summary.';
    public website: string;

    constructor(id)
    constructor(id, name?, downloads?, size?) {
        super(id, ArticleType.GAME);
        this.name = name ? name : undefined;
        this.downloads = downloads ? downloads : [];
        this.size = size ? size : undefined;
    }

    public parseGame(game: Game) {
        this.id = game.id ? game.id : undefined;
        this.name = game.name ? game.name : undefined;
        this.downloads = game.downloads ? game.downloads : [];
        this.size = game.size ? game.size : undefined;
        this.infos = game.infos ? game.infos : [];
        this.summary = game.summary ? game.summary : 'No summary.';
        this.website = game.website ? game.website : undefined;
    }

}
