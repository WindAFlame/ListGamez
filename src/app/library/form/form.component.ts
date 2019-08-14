import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Game } from 'src/app/_other/game.class';
import { GameService } from 'src/app/_other/game.service';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-library-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class LibraryFormComponent implements OnInit, OnDestroy {

    public library: Observable<Game[]> | Game[];
    public isCollapsed = false;
    public alive$ = new Subject<void>();

    constructor(
        private gameS: GameService
    ) { }

    ngOnInit() {
        this.gameS.getList().pipe(
            takeUntil(this.alive$)
        ).subscribe(games => {
            this.library = games;
        });
    }

    ngOnDestroy() {
        this.alive$.next();
        this.alive$.complete();
    }

    saveInLibrary(item: Game) {
        this.gameS.pushGame(item);
    }
}
