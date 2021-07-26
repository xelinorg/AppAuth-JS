import { StringMap } from './types';
export declare const GRANT_TYPE_AUTHORIZATION_CODE = "authorization_code";
export declare const GRANT_TYPE_REFRESH_TOKEN = "refresh_token";
export interface MeRequestJson {
    token: string;
}
export declare class MeRequest {
    token: string;
    constructor(request: MeRequestJson);
    toJson(): MeRequestJson;
    toStringMap(): StringMap;
}
