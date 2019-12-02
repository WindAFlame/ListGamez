import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/_other/library.service';

@Component({
    selector: 'app-template-data-export',
    templateUrl: './export.component.html',
    styleUrls: ['./export.component.scss']
})
export class TemplateDataExportComponent implements OnInit {

    public hideExport = false;

    constructor(
        public library: LibraryService
    ) { }

    ngOnInit() {
    }

}
