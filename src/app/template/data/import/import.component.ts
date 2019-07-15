import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GameService } from 'src/app/_other/game.service';

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
        private gameS: GameService
    ) { }

    ngOnInit() {
        this.importForm = this.fb.group({
            fileUpload: ['', [Validators.required]]
        });
    }

    public open(content) {
        this.modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        this.modalRef.result.finally(() => {
            this.file = undefined;
            this.importForm.reset();
        })
    }

    public onFileChange(event) {
        this.file = event.target.files[0];
    }

    public onSubmit() {
        if (this.importForm.valid && this.importForm.dirty) {
            this.gameS.loadGameLibraryFromUserInput(this.file).subscribe(
                () => { this.modalRef.close(); }
            )
        }
    }

}
