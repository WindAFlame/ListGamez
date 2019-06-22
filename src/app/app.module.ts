import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-rooting.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ArticleDetailComponent } from './article/detail/detail.component';
import { ArticleListComponent } from './article/list/list.component';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateSearchBarComponent } from './template/search-bar/search-bar.component';


@NgModule({
  declarations: [
    TemplateComponent,
    TemplateSearchBarComponent,
    HomeComponent,
    ArticleListComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [TemplateComponent]
})
export class AppModule { }
