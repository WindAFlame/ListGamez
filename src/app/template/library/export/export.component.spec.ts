import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDataExportComponent } from './export.component';

describe('ExportComponent', () => {
  let component: TemplateDataExportComponent;
  let fixture: ComponentFixture<TemplateDataExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDataExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDataExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
