export interface MeResponseJson {
    sub: string;
    profile?: {
        website?: string;
        gender?: string;
    };
}
export declare type ErrorType = 'invalid_request' | 'invalid_client' | 'invalid_grant' | 'unauthorized_client' | 'unsupported_grant_type' | 'invalid_scope';
/**
 * Represents the TokenError as a JSON Object.
 */
export interface MeErrorJson {
    error: ErrorType;
    error_description?: string;
    error_uri?: string;
    sub: string;
}
export declare class MeResponse {
    sub: string;
    profile?: {
        website?: string;
        gender?: string;
    };
    constructor(response: MeResponseJson);
    toJson(): MeResponseJson;
}
/**
 * Represents the Token Error type.
 * For more information look at:
 * https://tools.ietf.org/html/rfc6749#section-5.2
 */
export declare class MeError {
    sub: string;
    error: ErrorType;
    errorDescription: string | undefined;
    errorUri: string | undefined;
    constructor(meError: MeErrorJson);
    toJson(): MeErrorJson;
}
