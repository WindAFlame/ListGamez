import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Article } from '../_other/article/article.class';
import { Game } from '../_other/article/game.class';
import { LibraryService } from '../_other/library.service';

@Injectable()
export class ArticleExistResolver implements Resolve<Game | Article> {

  constructor(
      private router: Router,
      private library: LibraryService
    ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Game | Article> {
    const articleId = Number(route.paramMap.get('id'));
    if (this.library.getLibrary()) {
        const result = this.library.getLibrary().find(a => a.id === articleId);
        if (result) {
            return of(this.library.getLibrary().find(a => a.id === articleId));
        } else {
            this.handleError(articleId);
        }
    } else {
        return this.handleError(articleId);
    }
  }

  handleError(articleId) {
    alert('Game with id ' + articleId + ' was not found');
    this.router.navigateByUrl('/');
    return of(null);
  }
}
