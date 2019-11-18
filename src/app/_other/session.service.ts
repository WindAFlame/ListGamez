import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { first, map } from 'rxjs/operators';
import { SessionEnum } from './session.enum';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    private readonly INTERNAL_SESSION_CONFIG_FILE = 'assets/session-config.json';

    constructor(
        private http: HttpClient
    ) {
        this.initialiseSessionStorageFromInternalConfigurationFile();
    }

    private initialiseSessionStorageFromInternalConfigurationFile() {
        this.http.get<{}>(this.INTERNAL_SESSION_CONFIG_FILE).pipe(
            first(),
            map(json => plainToClass(Map, json))
        ).toPromise().then(
            (sessionCfg) => {
                // tslint:disable-next-line: forin
                for (const key in SessionEnum) {
                    const identifier = SessionEnum[key];
                    if (sessionCfg.has(identifier) && !sessionStorage.getItem(identifier)) {
                        sessionStorage.setItem(identifier, sessionCfg.get(identifier).toString());
                    }
                }
            }
        );
    }
}
