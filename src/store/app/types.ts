export interface INotificationPayload {
    title: string;
    text: string;
}

export interface IAppState {
    isInitialAppLoaded: boolean;
    appNotificationTitle: string;
    appNotificationText: string;
    appNotificationVisible: boolean;
}