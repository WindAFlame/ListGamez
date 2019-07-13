import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-template-data-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class TemplateDataEditComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  public open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

}
