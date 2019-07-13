import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-template-data-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class TemplateDataImportComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  public open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

}
