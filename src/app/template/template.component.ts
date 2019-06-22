import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { GameService } from '../_other/game.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  public showSearchBar = false;

  public searchForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private gameS: GameService
  ) { }

  ngOnInit() {
    this.subscribeRouteUrlEvent();
    this.initialiseSearchForm();
  }

  public searchSubmit() {
    if (this.searchForm.valid) {
      this.gameS.searchGame(this.searchForm.get('userInput').value);
    }
  }

  private subscribeRouteUrlEvent() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.showSearchBar = (event.url === '/');
      }
    });
  }

  private initialiseSearchForm() {
    this.searchForm = this.formBuilder.group(
      { userInput: ['', ] }
    );
  }
}
