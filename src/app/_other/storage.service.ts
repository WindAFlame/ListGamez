import { Injectable } from '@angular/core';

export const STORAGE_KEY = {
  GAME: 'game',
  TEST: 'test'
};

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public has(key: string): boolean {
    return !!localStorage.getItem(key);
  }

  public get(key: string): string {
    return localStorage.getItem(key);
  }

  public set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public clean() {
    // tslint:disable-next-line: forin
    for (const key in STORAGE_KEY) {
        localStorage.removeItem(STORAGE_KEY[key]);
    }
  }

}
