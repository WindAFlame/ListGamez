import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit as farEdit } from '@fortawesome/free-regular-svg-icons';
import { faDatabase, faDownload, faExternalLinkAlt, faFileImport, faFileUpload, faMagnet, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FontAwesomeModule
    ],
    exports: [
        CommonModule,
        NgbModule,
        FontAwesomeModule
    ]
})
export class SharedModule {
    constructor() {
        // Add an icon to the library for convenient access in other components
        library.add(farEdit, faDownload, faFileImport, faFileUpload, faDatabase, faMagnet, faExternalLinkAlt, faTrashAlt, faPlus);
    }
}
