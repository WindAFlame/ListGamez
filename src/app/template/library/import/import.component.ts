import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CustomValidators } from 'src/app/_other/custom-validator';
import { GameService } from 'src/app/_other/game.service';
import { LibraryService } from 'src/app/_other/library.service';

@Component({
    selector: 'app-template-data-import',
    templateUrl: './import.component.html',
    styleUrls: ['./import.component.scss']
})
export class TemplateDataImportComponent implements OnInit {

    private modalRef: NgbModalRef;
    private importForm: FormGroup;
    private file: File;

    constructor(
        private modalService: NgbModal,
        private fb: FormBuilder,
        private libraryService: LibraryService
    ) { }

    ngOnInit() {
        this.importForm = this.fb.group({
            fileUpload: ['', [
                Validators.required,
                CustomValidators.requiredFileType('json')
            ]]
        });
    }

    public open(content) {
        this.modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        this.modalRef.result.finally(() => {
            this.file = undefined;
            this.importForm.reset();
        })
    }

    public onFileChanged(event) {
        this.file = event.target.files[0];
        this.importForm.get('fileUpload').markAsDirty();
    }

    public onSubmit() {
        if (this.importForm.valid && this.importForm.dirty) {
            this.libraryService.retrieveLibraryOverHttpFromUserInput(this.file).subscribe(
                () => { this.modalRef.close(); }
            );
        }
    }

}
