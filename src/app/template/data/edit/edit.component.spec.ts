import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDataEditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: TemplateDataEditComponent;
  let fixture: ComponentFixture<TemplateDataEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDataEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
