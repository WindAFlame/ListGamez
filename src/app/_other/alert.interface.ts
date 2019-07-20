import { AlertType } from './alert-type.enum';

export interface Alert {
    type: AlertType;
    message: string;
}
