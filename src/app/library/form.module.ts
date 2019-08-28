import { NgModule } from '@angular/core';
import { SharedModule } from '../_other/shared.module';
import { LibraryFormRoutingModule } from './form-routing.module';
import { LibraryFormComponent } from './form/form.component';
import { LibraryFormEditGameComponent } from './form/edit/game/game.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        LibraryFormRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        LibraryFormComponent,
        LibraryFormEditGameComponent
    ],
    exports: [
        LibraryFormRoutingModule,
    ]
})
export class LibraryFormModule { }
