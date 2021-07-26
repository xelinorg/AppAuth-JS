export interface MeResponseJson {
  sub: string;
  profile?: {website?: string, gender?: string}
}
export type ErrorType = 'invalid_request'|'invalid_client'|'invalid_grant'|'unauthorized_client'|
    'unsupported_grant_type'|'invalid_scope';

/**
 * Represents the TokenError as a JSON Object.
 */
export interface MeErrorJson {
  error: ErrorType;
  error_description?: string;
  error_uri?: string;
  sub: string;
}

export class MeResponse {
  sub: string;
  profile?: {website?: string, gender?: string}

  constructor(response: MeResponseJson) {
    this.sub = response.sub;
    this.profile = response.profile;
  }

  toJson(): MeResponseJson {
    return {sub: this.sub || ''};
  }
}

/**
 * Represents the Token Error type.
 * For more information look at:
 * https://tools.ietf.org/html/rfc6749#section-5.2
 */
export class MeError {
  sub: string;
  error: ErrorType;
  errorDescription: string|undefined;
  errorUri: string|undefined;

  constructor(meError: MeErrorJson) {
    this.error = meError.error;
    this.errorDescription = meError.error_description;
    this.errorUri = meError.error_uri;
    this.sub = '';
  }

  toJson(): MeErrorJson {
    return {
      error: this.error, error_description: this.errorDescription, error_uri: this.errorUri, sub: ''
    }
  }
}
