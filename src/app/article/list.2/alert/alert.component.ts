import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/_other/alert.interface';
import { AlertType } from 'src/app/_other/alert-type.enum';
import { SessionEnum } from 'src/app/_other/session.enum';

@Component({
    selector: 'app-article-list-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class ArticleListAlertComponent implements OnInit {

    public listAlerts: Alert[] = [];

    constructor() { }

    ngOnInit() {
        this.drawBubbleInformation();
    }

    /** While user hasn't closed this bubble alert in his session, we draw it. */
    private drawBubbleInformation() {
        if (!JSON.parse(sessionStorage.getItem(SessionEnum.HIDE_BUBBLE_INFORMATION))) {
            this.listAlerts.push({
                type: AlertType.INFO,
                message: 'This is an information bubble. You can close it if you have read about this feature.',
            });
        }
    }

    public close(alert: Alert) {
        if (alert.message === 'This is an information bubble. You can close it if you have read about this feature.') {
            sessionStorage.setItem(SessionEnum.HIDE_BUBBLE_INFORMATION, 'true');
        }
        this.listAlerts.splice(this.listAlerts.indexOf(alert), 1);
    }

}
