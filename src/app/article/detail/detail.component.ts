import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/_other/game.class';
import { GameService } from 'src/app/_other/game.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public game: Game;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameS: GameService
  ) { }

  ngOnInit() {
    this.loadGame();
    this.navigateToHomeIfGameNotExist();
  }

  private loadGame() {
    this.gameS.getGameListFromFile();
    this.game = this.gameS.getGameById(this.route.snapshot.paramMap.get('id'));
  }

  private navigateToHomeIfGameNotExist() {
    if (!this.game) {
      this.router.navigateByUrl('/');
    }
  }

}
