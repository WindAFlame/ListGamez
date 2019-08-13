import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { classToPlain, plainToClass } from 'class-transformer';
import { DownloadLink, DownloadLinkType, Game, GameInformations } from 'src/app/_other/game.class';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-library-form-edit-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class LibraryFormEditGameComponent implements OnInit, OnDestroy {

    // Input object to be modified with this form.
    @Input() item: Game;
    // Object linked to the form. Maintained by the form to facilitate the saving of changes to this object.
    private internalItem: Game;
    public libraryForm: FormGroup;
    // Internally referenced enum to be used by template.
    public DLT = DownloadLinkType;
    public DLTKeys = Object.keys(DownloadLinkType);
    // Subject always active as long as the component is active  or the form has not been submitted.
    private alive$ = new Subject();

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.initialiseForm();
    }

    ngOnDestroy() {
        this.alive$.next();
        this.alive$.complete();
    }

    private initialiseForm() {
        this.initialiseItem();

        this.libraryForm = this.formBuilder.group({
            id: [this.internalItem.id, [Validators.required]],
            name: [this.internalItem.name, [Validators.required]],
            website: [this.internalItem.website, []],
            informations: this.formBuilder.array(
                this.internalItem.infos ?
                    this.internalItem.infos.map(i => {
                        return this.formBuilder.group({
                            id: [i.id, [Validators.required]],
                            name: [i.name, [Validators.required]],
                            value: [i.value, [Validators.required]]
                        });
                    }) :
                    []
            ),
            size: [this.internalItem.size, []],
            summary: [this.internalItem.summary, [Validators.required]],
            downloads: this.formBuilder.array(
                this.internalItem.downloads ?
                    this.internalItem.downloads.map(d => {
                        return this.formBuilder.group({
                            id: [d.id, [Validators.required]],
                            type: [d.type, [Validators.required]],
                            link: [d.link, [Validators.required]]
                        });
                    }) :
                    []
            )
        });
        // No reference is used for the tables, we subscribe to the changes in these values to keep our internal objective up to date.
        this.libraryForm.get('informations').valueChanges.pipe(
            takeUntil(this.alive$)
        ).subscribe(
            val => this.internalItem.infos = val
        );
        this.libraryForm.get('downloads').valueChanges.pipe(
            takeUntil(this.alive$)
        ).subscribe(
            val => this.internalItem.downloads = val
        );
    }

    /**
     * Local copy of the object to be modified with the form.
     */
    private initialiseItem() {
        this.internalItem = new Game();
        if (this.item) {
            const plain = classToPlain(this.item);
            this.internalItem = plainToClass(Game, plain);
        }
    }

    public saveChanges() {
        if (this.libraryForm.valid) {
            console.log('Internal Item > ', this.internalItem);
            this.alive$.next();
        } else {
            console.log('An error was detected : ', this.libraryForm.getError);
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
