import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Game } from 'src/app/_other/game.class';

@Component({
    selector: 'app-library-form-edit-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class LibraryFormEditGameComponent implements OnInit {

    @Input() item: Game;
    public libraryForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.initialiseForm();
    }

    private initialiseForm() {
        this.libraryForm = this.formBuilder.group({
            id: [this.item.id, [Validators.required]],
            name: [this.item.name, [Validators.required]],
            website: [this.item.website, []],
            informations: [this.item.infos, [Validators.required]],
            size: [this.item.size, []],
            summary: [this.item.summary, [Validators.required]],
            downloads: [this.item.downloads, []],
        });
        console.log(this.libraryForm.get('informations').value)
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

    public addNewDownloadLink() {
        const list = (this.libraryForm.get('downloads').value as Array<any>)
        list.push({
            id: list.length, type: '', link: ''
        });
    }

    public addNewInformation() {
        const list = (this.libraryForm.get('informations').value as Array<any>)
        list.push({
            id: list.length, name: '', value: ''
        });
    }

    public removeFromInformation(id: number) {
        const list = (this.libraryForm.get('informations').value as Array<any>);
        this.removeFromArray(id, list);
    }

    public removeFromDownload(id: number) {
        const list = (this.libraryForm.get('downloads').value as Array<any>);
        this.removeFromArray(id, list);

    }

    private removeFromArray(id: number, list: Array<any>) {
        const indexOfContentToRemove = list.findIndex(i => i.id === id) + 1;
        list.splice(indexOfContentToRemove, 1);
    }

}
