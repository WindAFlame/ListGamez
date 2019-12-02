import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { deserialize, plainToClass, serialize } from 'class-transformer';
import { saveAs } from 'file-saver';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleType } from './article/article-type.enum';
import { Article } from './article/article.class';
import { Game } from './article/game.class';
import { Storage } from './storage.class';
import { AlertType } from './alert-type.enum';
import { Alert } from './alert.interface';

@Injectable({ providedIn: 'root' })
export class LibraryService {

    private readonly LIBRARY_PATH = 'xassets/library.json';
    public readonly LIBRARY_STORAGE_KEY = 'library';

    private library: Array<Game | Article> = [];
    private librarySubj = new ReplaySubject<Array<Game | Article>>(1);
    public library$ = this.librarySubj.asObservable();

    private libraryNotification: Alert;
    private libraryNotificationSubj = new ReplaySubject<Alert>(1);
    public libraryNotification$ = this.libraryNotificationSubj.asObservable();

    constructor(
        private http: HttpClient
    ) {
        if (!this.retrieveFromStorage()) {
            this.retrieveOverHttpFromAssets()
            .then((library) => {
                this.libraryNotification = undefined;
                this.library = library;
                this.store();
            })
            .catch(() => {
                this.emitNotify(AlertType.WARNING, 'Impossible to find library. Please create one.');
            });
        }
    }

    public get(): Array<Game | Article> {
        return this.library;
    }

    public add(article: Article) {
        this.library.push(article);
        this.store();
    }

    public remove(index: number) {
        this.library.splice(index, 1);
        this.store();
    }

    private store() {
        this.clearNotify();
        this.librarySubj.next(this.library);
        Storage.set(this.LIBRARY_STORAGE_KEY, serialize(this.library));
    }

    public export() {
        const file = new File([JSON.stringify(this.library)], 'datas.json', { type: 'application/json;charset=utf-8' });
        saveAs(file);
    }

    private emitNotify(type: AlertType, msg: string) {
        this.libraryNotification = {
            type: type,
            message: msg
        };
        this.libraryNotificationSubj.next(this.libraryNotification);
    }

    private clearNotify() {
        if (this.libraryNotification) {
            this.libraryNotification = undefined;
            this.libraryNotificationSubj.next(this.libraryNotification);
        }
    }

    private parsePlainToClass(jsonLibrary: Article[]): Array<Game | Article> {
        const newLibrary: Array<Game | Article> = [];
        for (const article of jsonLibrary) {
            if (article.type === ArticleType.GAME) {
                newLibrary.push(plainToClass(Game, article));
            } else {
                newLibrary.push(plainToClass(Article, article));
            }
        }
        return newLibrary;
    }

    private retrieveOverHttpFromAssets(): Promise<Array<Game | Article>> {
        return this.http.get<Array<Game | Article>>(this.LIBRARY_PATH).pipe(
            map(d => this.parsePlainToClass(d))
        ).toPromise()
    }

    public retrieveOverHttpFromUserInput(file: File): Observable<null> {
        return Observable.create((observer) => {
            const reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = (evt) => {
                const json: Article[] = JSON.parse(reader.result.toString());
                this.library = this.parsePlainToClass(json);
                this.store();
                observer.next();
                observer.complete();
            };
            reader.onerror = (evt) => {
                observer.throwError(evt);
                observer.complete();
            };
        });
    }

    private retrieveFromStorage(): boolean {
        let loadLibraryFromStorage = false;
        const plainLibraryFromStorage: string = Storage.get(this.LIBRARY_STORAGE_KEY);
        if (plainLibraryFromStorage) {
            this.library = this.parsePlainToClass(
                deserialize(Article, plainLibraryFromStorage) as any
            );
            if (this.library && this.library.length > 0) {
                this.librarySubj.next(this.library);
            } else {
                this.emitNotify(AlertType.WARNING, 'Library is empty.');
            }
            loadLibraryFromStorage = true;
        }
        return loadLibraryFromStorage;
    }

}
