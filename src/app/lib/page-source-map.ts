export interface ResultMap {
    pageId: number;
    pageName: string;
    url: string;
    type: JsonType;
    typeLabel: string;
    matchCase: MatchCase;
    matchCount: number;
    futureShopUrl: string;
    isFirstMatch: boolean;
}
export enum JsonType {
    pcLogout = 0,
    pcLogin = 1,
    spLogout = 2,
    spLogin = 3
}
export enum MatchCase {
    class = 1,
    id = 2
}
export const JsonTypeHashMap = [
    { jsonType: JsonType.pcLogout, label: 'PCログアウト' },
    { jsonType: JsonType.pcLogin, label: 'PCログイン' },
    { jsonType: JsonType.spLogout, label: 'SPログアウト' },
    { jsonType: JsonType.spLogin, label: 'SPログイン' }
];
export const MatchCaseHashMap = [
    { caseId: MatchCase.class, label: 'class' },
    { caseId: MatchCase.id, label: 'id' }
];
export interface ConfirmPage {
    pageId: string;
    pageName: string;
    url: string;
    futureShopUrl: string;
}
