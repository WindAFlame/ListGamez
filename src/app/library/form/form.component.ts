import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Game } from 'src/app/_other/article/game.class';
import { GameService } from 'src/app/_other/game.service';
import { takeUntil } from 'rxjs/operators';
import { NgbAccordion, NgbPanel } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-library-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class LibraryFormComponent implements OnInit, OnDestroy {

    public library: Observable<Game[]> | Game[];
    public isCollapsed = false;
    public alive$ = new Subject<void>();
    @ViewChild('acc', { static: true }) acc: NgbAccordion;

    constructor(
        private gameS: GameService
    ) { }

    ngOnInit() {
        this.library = this.gameS.getList();
    }

    ngOnDestroy() {
        this.alive$.next();
        this.alive$.complete();
    }

    saveInLibrary(item: Game, panelId: string) {
        this.gameS.push(item);
        this.acc.toggle(panelId);
    }

    removeFromLibrary(id: string) {
        this.gameS.remove(Number(id));
    }
}
