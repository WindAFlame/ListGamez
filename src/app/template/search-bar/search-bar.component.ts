import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class TemplateSearchBarComponent implements OnInit {

  public searchForm: FormGroup;
  @Output() emitUserInput = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initialiseSearchForm();
  }

  public searchSubmit() {
    if (this.searchForm.valid) {
      this.emitUserInput.emit(this.searchForm.controls.userInput.value);
    }
  }

  private initialiseSearchForm() {
    this.searchForm = this.formBuilder.group(
      { userInput: ['', ] }
    );
  }

}
