import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { plainToClass } from 'node_modules/class-transformer';

import { Alert } from 'src/app/_other/alert.interface';
import { Game } from 'src/app/_other/game.class';
import { GAME_DATA } from './game.class';
import { of, Observable } from 'rxjs';

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
    private http: HttpClient
  ) { }

  ngOnInit() {
    // this.http.get<Game[]>('game.json').toPromise().then(
    //   data => {
    //     this.games = plainToClass(Game, data);
    //   }
    // );
    this.games = of(plainToClass(Game, GAME_DATA));
  }

  public close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}
