import { IDeltaCrypto } from "./IDeltaCrypto";

export interface IDeltaWallet {
    id?: number;
    funds: number;
    totalCapitalValue: number;
    assets?: IDeltaCrypto[];
}