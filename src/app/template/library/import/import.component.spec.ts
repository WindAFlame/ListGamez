import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDataImportComponent } from './import.component';

describe('ImportComponent', () => {
  let component: TemplateDataImportComponent;
  let fixture: ComponentFixture<TemplateDataImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDataImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDataImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
