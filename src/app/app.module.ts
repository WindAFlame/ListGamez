import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-rooting.module';
import { TemplateDataEditComponent } from './template/library/edit/edit.component';
import { TemplateDataExportComponent } from './template/library/export/export.component';
import { TemplateDataImportComponent } from './template/library/import/import.component';
import { TemplateSearchBarComponent } from './template/search-bar/search-bar.component';
import { TemplateComponent } from './template/template.component';
import { SharedModule } from './_other/shared.module';

@NgModule({
    declarations: [
        TemplateComponent,
        TemplateSearchBarComponent,
        TemplateDataEditComponent,
        TemplateDataExportComponent,
        TemplateDataImportComponent
    ],
    imports: [
        SharedModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [TemplateComponent]
})
export class AppModule { }
