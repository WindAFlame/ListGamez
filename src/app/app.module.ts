import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit as farEdit } from '@fortawesome/free-regular-svg-icons';
import { faDatabase, faDownload, faExternalLinkAlt, faFileImport, faFileUpload, faMagnet } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-rooting.module';
import { ArticleDetailComponent } from './article/detail/detail.component';
import { ArticleListComponent } from './article/list/list.component';
import { HomeComponent } from './home/home.component';
import { TemplateSearchBarComponent } from './template/search-bar/search-bar.component';
import { TemplateComponent } from './template/template.component';


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
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [TemplateComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(farEdit, faDownload, faFileImport, faFileUpload, faDatabase, faMagnet, faExternalLinkAlt);
  }
}
