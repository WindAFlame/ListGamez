import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertType } from 'src/app/_other/alert-type.enum';
import { Alert } from 'src/app/_other/alert.interface';
import { SessionEnum } from 'src/app/_other/session.enum';

@Component({
    selector: 'app-article-list-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class ArticleListAlertComponent implements OnInit {

    @Input() libraryAlertObs: Observable<Alert>;
    private libraryAlert: Alert;
    public listAlerts: Alert[] = [];
    private readonly msgEmpty = 'The library is empty !';

    constructor() { }

    ngOnInit() {
        this.drawBubbleInformation();
        this.subscribeToLibraryNotification();
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

    private subscribeToLibraryNotification() {
        this.libraryAlertObs.subscribe((data) => {
            if (data) {
                this.libraryAlert = data;
                this.listAlerts.push(this.libraryAlert);
            } else {
                this.listAlerts.splice(this.listAlerts.indexOf(this.libraryAlert), 1);
                this.libraryAlert = data;
            }
        });
    }

    public close(alert: Alert) {
        if (alert.message === 'This is an information bubble. You can close it if you have read about this feature.') {
            sessionStorage.setItem(SessionEnum.HIDE_BUBBLE_INFORMATION, 'true');
        }
        this.listAlerts.splice(this.listAlerts.indexOf(alert), 1);
    }

}
