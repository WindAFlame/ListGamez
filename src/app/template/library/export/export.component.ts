import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/_other/game.service';

@Component({
    selector: 'app-template-data-export',
    templateUrl: './export.component.html',
    styleUrls: ['./export.component.scss']
})
export class TemplateDataExportComponent implements OnInit {

    public hideExport = false;

    constructor(
        public gameS: GameService
    ) { }

    ngOnInit() {
    }

    // private subscribeGameStatus() {
    //     this.gameS.getList().subscribe(
    //         (status) => {
    //             this.hideExport = !(status === GameServiceStatus.FOUND);
    //         }
    //     )
    // }

}
