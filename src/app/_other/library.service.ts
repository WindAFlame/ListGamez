import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { plainToClass, serialize } from 'class-transformer';
import { saveAs } from 'file-saver';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleType } from './article/article-type.enum';
import { Article } from './article/article.class';
import { Game } from './article/game.class';
import { Storage } from './storage.class';

@Injectable({ providedIn: 'root' })
export class LibraryService {

    private readonly LIBRARY_PATH = 'assets/library.json';
    public readonly LIBRARY_STORAGE_KEY = 'library';

    private library: Array<Game | Article> = [];
    private librarySubj = new ReplaySubject<Array<Game | Article>>(1);
    public library$ = this.librarySubj.asObservable();

    constructor(
        private http: HttpClient
    ) {
        this.retrieveLibraryOverHttp();
    }

    public getLibrary(): Array<Game | Article> {
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

    private retrieveLibraryOverHttp() {
        this.retrieveLibraryOverHttpFromAssets();
    }

    private retrieveLibraryOverHttpFromAssets() {
        this.http.get<Array<Game | Article>>(this.LIBRARY_PATH).pipe(
            map(d => this.parseLibraryToClass(d))
        ).toPromise()
            .then((library) => {
                this.library = library;
                this.store();
            })
            .catch(() => console.log('Impossible to find file.'));
    }

    public retrieveLibraryOverHttpFromUserInput(file: File): Observable<null> {
        return Observable.create((observer) => {
            const reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = (evt) => {
                const json: Article[] = JSON.parse(reader.result.toString());
                this.library = this.parseLibraryToClass(json);
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

    private parseLibraryToClass(jsonLibrary: Article[]) {
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

    private store() {
        this.librarySubj.next(this.library);
        Storage.set(this.LIBRARY_STORAGE_KEY, serialize(this.library));
    }

    public export() {
        const file = new File([JSON.stringify(this.library)], 'datas.json', { type: 'application/json;charset=utf-8' });
        saveAs(file);
    }

}
