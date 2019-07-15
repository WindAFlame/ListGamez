import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from 'src/app/_other/alert.interface';
import { GameServiceStatus } from 'src/app/_other/game-service-status.enum';
import { Game } from 'src/app/_other/game.class';
import { GameService } from 'src/app/_other/game.service';

@Component({
    selector: 'app-article-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ArticleListComponent implements OnInit {

    public showTable = false;
    public alerts: Alert[] = [];

    public games: Game[] | Observable<Game[]> = [];

    constructor(
        private gameS: GameService
    ) {
        // TODO: Translation
        this.alerts.push({
            type: 'info',
            message: 'This is an information bubble. You can close it if you have read about this feature.',
        });
    }

    ngOnInit() {
        this.loadGameList();
        this.subscribeGameServiceStatus();
    }

    public close(alert: Alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }

    private loadGameList() {
        this.games = this.gameS.getList();
    }

    private subscribeGameServiceStatus() {
        let previousState: GameServiceStatus;
        this.gameS.getStatus().subscribe(
            (status) => {
                this.showTable = !(status === GameServiceStatus.EMPTY);
                if (previousState === GameServiceStatus.EMPTY && status === GameServiceStatus.FOUND) {
                    this.alerts.push(
                        // TODO: Translation
                        { type: 'success', message: 'Your library has been successfully loaded.' }
                    );
                } else if (status === GameServiceStatus.NOT_FOUND) {
                    this.alerts.push(
                        // TODO: Translation
                        { type: 'warning', message: 'Your search has 0 result.' }
                    );
                } else if (status === GameServiceStatus.EMPTY) {
                    this.alerts.push(
                        // TODO: Translation
                        { type: 'danger', message: 'You are no game in your library.' }
                    );
                }
                previousState = status;
            }
        );
    }
}
