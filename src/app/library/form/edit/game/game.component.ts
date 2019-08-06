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
    public DLT = Object.keys(DownloadLinkType);

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

        for (const info of this.internalItem.infos) {
            this.addItemInInformationFormArray(info);
        }

        for (const download of this.internalItem.downloads) {
            this.addItemInDownloadFormArray(download);
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
        console.log('You are saved nothing !');
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
