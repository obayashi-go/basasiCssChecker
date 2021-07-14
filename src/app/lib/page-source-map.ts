export interface ResultMap {
  pageId: number;
  pageName: string;
  url: string;
  type: JsonTYpe;
  typeLabel: string;
  matchCase: MatchCase;
}
export enum JsonTYpe {
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
  { jsonType: JsonTYpe.pcLogout, label: 'PCログアウト' },
  { jsonType: JsonTYpe.pcLogin, label: 'PCログイン' },
  { jsonType: JsonTYpe.spLogout, label: 'SPログアウト' },
  { jsonType: JsonTYpe.spLogin, label: 'SPログイン' }
];
