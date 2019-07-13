import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-template-data-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class TemplateDataExportComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  public open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

}
