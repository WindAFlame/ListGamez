import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GameService } from 'src/app/_other/game.service';

@Component({
  selector: 'app-template-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class TemplateSearchBarComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private gameS: GameService
  ) { }

  ngOnInit() {
    this.initialiseSearchForm();
  }

  public searchSubmit() {
    if (this.searchForm.valid) {
      this.gameS.searchGame(this.searchForm.get('userInput').value);
    }
  }

  private initialiseSearchForm() {
    this.searchForm = this.formBuilder.group(
      { userInput: ['', ] }
    );
  }

}
