import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/_other/game.class';
import { GameService } from 'src/app/_other/game.service';

@Component({
    selector: 'app-library-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class LibraryFormComponent implements OnInit {

    public library: Observable<Game[]> | Game[];
    public isCollapsed = false;

    constructor(
        private gameS: GameService
    ) { }

    ngOnInit() {
        this.gameS.getList().subscribe(games => {
            this.library = games;
        });
    }

}
