import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from './game.class';
import { GAME_DATA } from './game.data';

@Injectable({ providedIn: 'root' })
export class GameService {

    private list: Game[] = [];
    private listSubj = new BehaviorSubject<Game[]>(this.list);

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) { }

    public getList(): Observable<Game[]> {
        return this.listSubj.asObservable();
    }
    private setList(newList: Game[]) {
        this.list = newList;
        this.listSubj.next(this.list);
    }


    public getGameListFromFile(): Observable<Game[]> {
        this.setList(plainToClass(Game, GAME_DATA));
        return this.getList();
    }

    public getGameListFromLink(link: string) {
        this.http.get<Game[]>(link).toPromise().then(
            newList => this.setList(plainToClass(Game, newList))
        );
        return this.getList();
    }

    public getGameById(id: string): Game {
        return this.list.find(g => g.id === Number(id));
    }

}