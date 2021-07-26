import {StringMap} from './types';

export const GRANT_TYPE_AUTHORIZATION_CODE = 'authorization_code';
export const GRANT_TYPE_REFRESH_TOKEN = 'refresh_token';

export interface MeRequestJson {
  token: string;
}

export class MeRequest {
  token: string;

  constructor(request: MeRequestJson) {
    this.token = request.token;
  }

  toJson(): MeRequestJson {
    return {token: this.token};
  }

  toStringMap(): StringMap {
    let map: StringMap = {token: this.token};
    return map;
  }
}
