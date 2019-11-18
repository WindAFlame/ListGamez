import { Injectable } from '@angular/core';
import { LibraryService } from './library.service';
import { ArticleType } from './article/article-type.enum';
import { filter, map } from 'rxjs/operators';
import { Game } from './article/game.class';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameService {

    constructor(
        private libraryService: LibraryService
    ) {}

    public getList(): Game[] {
        return this.libraryService.getLibrary().filter(a => a.type === ArticleType.GAME) as Game[];
    }

    public getList$(): Observable<Game[]> {
        return this.libraryService.library$.pipe(
            map(articles => articles.filter(a => a.type === ArticleType.GAME) as Game[])
        );
    }

    public search(userInput: string) {
        return this.getList().find(g => g.name === userInput);
    }

    public push(game: Game) {
        this.libraryService.add(game);
    }

    public remove(gameOrId: Game | number) {
        let index;
        if (gameOrId instanceof Game) {
            index = this.getList().findIndex(a => a.id === gameOrId.id);
        } else {
            index = gameOrId;
        }
        this.libraryService.remove(index);
    }

    public getGameById(id: string): Game {
        return this.getList() ? (this.getList().find(g => g.id === id) as Game) : null;
    }

}
