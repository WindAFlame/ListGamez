import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from 'src/app/_other/alert.interface';
import { Game } from 'src/app/_other/game.class';
import { GameService } from 'src/app/_other/game.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ArticleListComponent implements OnInit {

  public alerts: Alert[] = [{
    type: 'info',
    message: 'This info bubble thing is now dismissible. ',
  }];

  public games: Game[] | Observable<Game[]> = [];

  constructor(
    private http: HttpClient,
    private gameS: GameService
  ) { }

  ngOnInit() {
    this.loadGameList();
  }

  public close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  private loadGameList() {
    this.games = this.gameS.getGameListFromFile();
    this.subscribeSearchError();
  }

  private subscribeSearchError() {
    this.gameS.getList().subscribe(
      (list) => {
        if (list.length === 0 ) {
          this.alerts.push(
            { type: 'warning', message: 'Your search has 0 result.'}
          )
        }
      }
    )
  }
}
