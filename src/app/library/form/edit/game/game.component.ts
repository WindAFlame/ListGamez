import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { classToPlain, plainToClass } from 'class-transformer';
import { Subject } from 'rxjs';
import { DownloadLinkType } from 'src/app/_other/article/download-link-type.enum';
import { DownloadLink } from 'src/app/_other/article/download-link.class';
import { Game } from 'src/app/_other/article/game.class';
import { ArticleInformation } from 'src/app/_other/article/information.class';

@Component({
    selector: 'app-library-form-edit-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class LibraryFormEditGameComponent implements OnInit, OnDestroy {

    // Input object to be modified with this form.
    @Input() item: Game;
    @Input() index: number;
    @Output() save = new EventEmitter<Game>();
    // Object linked to the form. Maintained by the form to facilitate the saving of changes to this object.
    private internalItem: Game;
    public libraryForm: FormGroup;
    // Internally referenced enum to be used by template.
    public DLT = DownloadLinkType;
    public DLTKeys = Object.keys(DownloadLinkType);
    // Subject always active as long as the component is active  or the form has not been submitted.
    private alive$ = new Subject();
    private readonly regexForUrl = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.initialise();
    }

    ngOnDestroy() {
        this.alive$.next();
        this.alive$.complete();
    }

    private initialise() {
        this.initialiseItem();
        this.initialiseForm();
    }

    private initialiseForm() {
        this.libraryForm = this.formBuilder.group({
            id: [this.internalItem.id, [Validators.required]],
            name: [this.internalItem.name, [Validators.required]],
            website: [this.internalItem.website, [Validators.pattern(this.regexForUrl)]],
            infos: this.formBuilder.array(
                (this.internalItem.infos ?
                    this.internalItem.infos.map((i, index) => {
                        return this.generateGameInformationFormControl(index, i);
                    }) :
                    []
                ), Validators.required
            ),
            size: [this.internalItem.size, [Validators.required]],
            summary: [this.internalItem.summary, []],
            downloads: this.formBuilder.array(
                (this.internalItem.downloads ?
                    this.internalItem.downloads.map((d, index) => {
                        return this.generateDownloadLinkFormControl(index, d);
                    }) :
                    []
                ), Validators.required
            )
        });
    }

    /**
     * Local copy of the object to be modified with the form.
     */
    private initialiseItem() {
        if (this.item) {
            const plain = classToPlain(this.item);
            this.internalItem = plainToClass(Game, plain);
        } else if (this.index >= 0) {
            this.internalItem = new Game(this.index);
        }
    }

    public saveChanges() {
        this.libraryForm.markAllAsTouched();
        if (this.libraryForm.valid) {
            this.alive$.next();
            this.save.next(plainToClass(Game, this.libraryForm.value));
        } else {
            console.log('An error was detected : ', this.libraryForm.getError);
        }
    }

    public getSubmitLabel() {
        if (this.item) {
            return 'Save Changes';
        } else if (this.index >= 0) {
            return 'Add item';
        } else {
            throw Error('You need to use input item or index to use this component.');
        }
    }

    public addItemInDownloadFormArray(download?: DownloadLink) {
        const list = (this.libraryForm.get('downloads') as FormArray);
        list.push(this.generateDownloadLinkFormControl(list.length, download));
    }

    private generateDownloadLinkFormControl(index: number, download: DownloadLink) {
        return this.formBuilder.group({
            id: [download ? download.id : index, [Validators.required]],
            type: [download ? download.type : '', [Validators.required]],
            link: [download ? download.link : '', [Validators.required]]
        });
    }

    public removeItemFromDownloadFormArray(formArrayItemId: number) {
        const list = (this.libraryForm.get('downloads') as FormArray);
        list.removeAt(formArrayItemId);
    }

    public addItemInInformationFormArray(info?: ArticleInformation) {
        const list = (this.libraryForm.get('infos') as FormArray);
        list.push(this.generateGameInformationFormControl(list.length, info));
    }

    private generateGameInformationFormControl(index: number, info: ArticleInformation) {
        return this.formBuilder.group({
            id: [info ? info.id : index, [Validators.required]],
            name: [info ? info.name : '', [Validators.required]],
            value: [info ? info.value : '', [Validators.required]]
        });
    }

    public removeItemFromInformationFormArray(formArrayItemId: number) {
        const list = (this.libraryForm.get('infos') as FormArray);
        list.removeAt(formArrayItemId);
    }

    public resetForm() {
        this.libraryForm.reset();
        this.initialiseForm();
    }

}
