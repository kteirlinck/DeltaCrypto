export interface IDeltaSellOrder {
    id?: number;
    sellTargetUpper: number;
    sellTargetLower: number;
    quantity: number;
    datePlaced?: any;
    dateExecuted?: any;
    crypto?: any;
}