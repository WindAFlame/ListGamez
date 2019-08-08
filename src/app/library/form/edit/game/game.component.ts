import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { classToPlain, plainToClass } from 'class-transformer';
import { DownloadLink, DownloadLinkType, Game, GameInformations } from 'src/app/_other/game.class';

@Component({
    selector: 'app-library-form-edit-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class LibraryFormEditGameComponent implements OnInit {

    @Input() item: Game;
    private internalItem: Game;
    public libraryForm: FormGroup;
    public DLT = DownloadLinkType;
    public DLTKeys = Object.keys(DownloadLinkType);

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.initialiseForm();
    }

    private initialiseForm() {
        this.initialiseItem();

        this.libraryForm = this.formBuilder.group({
            id: [this.internalItem.id, [Validators.required]],
            name: [this.internalItem.name, [Validators.required]],
            website: [this.internalItem.website, []],
            informations: this.formBuilder.array([]),
            size: [this.internalItem.size, []],
            summary: [this.internalItem.summary, [Validators.required]],
            downloads: this.formBuilder.array([])
        });

        if (this.internalItem.infos) {
            for (const info of this.internalItem.infos) {
                this.addItemInInformationFormArray(info);
            }
        } else {
            this.addItemInInformationFormArray();
        }

        if (this.internalItem.downloads) {
            for (const download of this.internalItem.downloads) {
                this.addItemInDownloadFormArray(download);
            }
        } else {
            this.addItemInDownloadFormArray();
        }
    }

    private initialiseItem() {
        this.internalItem = new Game();
        if (this.item) {
            const plain = classToPlain(this.item);
            this.internalItem = plainToClass(Game, plain);
        }
    }

    public saveChanges() {
        if (this.libraryForm.valid) {
            this.internalItem.infos = this.libraryForm.get('informations').value;
            this.internalItem.downloads = this.libraryForm.get('downloads').value;
            console.log(this.internalItem);
        } else {
            console.log('An error was detected : ' + this.libraryForm.get);
        }
    }

    public getSubmitLabel() {
        if (this.item && this.item.id) {
            return 'Save Changes';
        } else {
            return 'Add item';
        }
    }

    public addItemInDownloadFormArray(download?: DownloadLink) {
        const list = (this.libraryForm.get('downloads') as FormArray);
        list.push(this.formBuilder.group({
            id: [list.length, [Validators.required]],
            type: ['', [Validators.required]],
            link: ['', [Validators.required]]
        }));
    }

    public removeItemFromDownloadFormArray(formArrayItemId: number) {
        const list = (this.libraryForm.get('downloads') as FormArray);
        list.removeAt(formArrayItemId);
    }

    public addItemInInformationFormArray(info?: GameInformations) {
        const list = (this.libraryForm.get('informations') as FormArray);
        list.push(this.formBuilder.group({
            id: [info ? info.id : list.length, [Validators.required]],
            name: [info ? info.name : '', [Validators.required]],
            value: [info ? info.value : '', [Validators.required]]
        }));
    }

    public removeItemFromInformationFormArray(formArrayItemId: number) {
        const list = (this.libraryForm.get('informations') as FormArray);
        list.removeAt(formArrayItemId);
    }

    public resetForm() {
        this.libraryForm.reset();
        this.initialiseForm();
    }

}
