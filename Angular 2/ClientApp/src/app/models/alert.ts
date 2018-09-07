export class Alert {
    type: AlertType;
    message: string;
    alertId: string;
    keepAfterRouteChange: boolean;

  constructor(init?: Partial<Alert>) {
    (<any>Object).assign(this, init);
    }
}

export enum AlertType {
    Success='Success',
    Error='Error'
}
