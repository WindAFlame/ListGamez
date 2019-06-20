import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from 'src/app/_other/alert.interface';
import { Game } from 'src/app/_other/game.class';
import { GameService } from 'src/app/_other/game.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

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

  private loadGameList() {
    this.games = this.gameS.getGameListFromFile();
  }

  public close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}
