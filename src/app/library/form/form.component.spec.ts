/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LibraryFormComponent } from './form.component';

describe('LibraryFormComponent', () => {
  let component: LibraryFormComponent;
  let fixture: ComponentFixture<LibraryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
