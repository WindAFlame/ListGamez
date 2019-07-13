import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { GameServiceStatus } from './game-service-status.enum';
import { Game } from './game.class';

@Injectable({ providedIn: 'root' })
export class GameService {

    private list: Game[] = [];
    private listSubj = new BehaviorSubject<Game[]>(this.list);

    private listStatusSubj = new Subject<GameServiceStatus>();

    public userSearch = false;

    private readonly INTERNAL_PATH_GAME_LIBRARY = `assets/game-library.json`;

    constructor(
        private http: HttpClient
    ) { this.getInternalGameLibrary(); }

    public getList(): Observable<Game[]> {
        return this.listSubj.asObservable();
    }
    private setList(newList: Game[]) {
        this.list = newList;
        this.listSubj.next(this.list);
    }

    public getGameById(id: string): Game {
        return this.list.find(g => g.id === Number(id));
    }

    public getStatus(): Observable<GameServiceStatus> {
        return this.listStatusSubj.asObservable();
    }

    public searchGame(userInput: string) {
        let newList: Game[] = this.list;
        if (userInput) {
            newList = newList.filter(i => i.name.toLowerCase().includes(userInput.toLowerCase()));
            (newList.length === 0) ?
                this.listStatusSubj.next(GameServiceStatus.NOT_FOUND) : this.listStatusSubj.next(GameServiceStatus.FOUND);
        }
        this.userSearch = !!userInput;
        this.listSubj.next(newList);
    }

    public getGameLibraryFromLink(link: string) {
        this.getGameLibraryFromHttp(link);
        return this.getList();
    }

    private getInternalGameLibrary() {
        this.getGameLibraryFromHttp(this.INTERNAL_PATH_GAME_LIBRARY)
            .catch(
                (err: HttpErrorResponse) => {
                    if (err.status === 404) {
                        this.listStatusSubj.next(GameServiceStatus.EMPTY);
                        return of(null);
                    } else {
                        return throwError(err);
                    }
                }
            );
    }

    private getGameLibraryFromHttp(link: string) {
        return this.http.get<Game[]>(link).toPromise()
            .then(
                datas => {
                    this.listStatusSubj.next(GameServiceStatus.FOUND);
                    this.setList(plainToClass(Game, datas));
                }
            );
    }

}