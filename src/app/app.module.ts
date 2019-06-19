import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-rooting.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { DetailComponent } from './article/detail/detail.component';
import { ListComponent } from './article/list/list.component';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';


@NgModule({
  declarations: [
    TemplateComponent,
    HomeComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [TemplateComponent]
})
export class AppModule { }
