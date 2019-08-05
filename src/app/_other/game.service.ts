import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { deserialize, plainToClass, serialize } from 'class-transformer';
import { saveAs } from 'file-saver';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { GameServiceStatus } from './game-service-status.enum';
import { Game } from './game.class';
import { StorageService, STORAGE_KEY } from './storage.service';

@Injectable({ providedIn: 'root' })
export class GameService {

    private get list(): Game[] {
        return deserialize(Game, this.dataStorage.get(STORAGE_KEY.GAME)) as unknown as Game[];
    }

    private set list(val: Game[]) {
        this.dataStorage.set(STORAGE_KEY.GAME, serialize(val));
    }

    private listSubj = new BehaviorSubject<Game[]>(this.list);

    private listStatusSubj = new BehaviorSubject<GameServiceStatus>(GameServiceStatus.EMPTY);

    public userSearch = false;

    // Server default value assets/game-library.json
    private readonly INTERNAL_PATH_GAME_LIBRARY = ``;

    constructor(
        private http: HttpClient,
        private dataStorage: StorageService
    ) {
        if (this.dataStorage.has(STORAGE_KEY.GAME)) {
            this.listStatusSubj.next(GameServiceStatus.FOUND);
        } else {
            this.getInternalGameLibrary();
        }
    }

    public getList(): Observable<Game[]> {
        return this.listSubj.asObservable();
    }

    private setList(newList: Game[]) {
        this.dataStorage.clean();
        this.list = newList;
        this.listSubj.next(this.list);
    }

    public getGameById(id: string): Game {
        let game: Game;
        if (this.list && id) {
            game = this.list.find(g => g.id === Number(id));
        }
        return game;
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

    public loadGameLibraryFromUserInput(file: File): Observable<null> {
        const self = this;
        return Observable.create((observer) => {
            const reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = (evt) => {
                const json = JSON.parse(reader.result.toString());
                const games: any = plainToClass(Game, json);
                this.listStatusSubj.next(GameServiceStatus.FOUND);
                self.setList(games as Game[]);
                observer.next();
                observer.complete();
            };
            reader.onerror = (evt) => {
                this.listStatusSubj.next(GameServiceStatus.NOT_FOUND);
                observer.throwError(evt);
                observer.complete();
            };
        });
    }

    public downloadLibrary() {
        this.getList().subscribe(res => {
            const file = new File([JSON.stringify(res)], 'datas.json', { type: 'application/json;charset=utf-8' });
            saveAs(file);
        });
    }
}
