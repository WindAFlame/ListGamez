import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: TemplateSearchBarComponent;
  let fixture: ComponentFixture<TemplateSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
