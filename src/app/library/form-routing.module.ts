import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryFormComponent } from './form/form.component';

const formRoutes: Routes = [
    { path: '', component: LibraryFormComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(formRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LibraryFormRoutingModule { }
