import { AuthorizationServiceConfiguration } from './authorization_service_configuration';
import { MeRequest } from './me_request';
import { MeResponse } from './me_response';
import { QueryStringUtils } from './query_string_utils';
import { Requestor } from './xhr';
export interface MeRequestHandler {
    performMeRequest(configuration: AuthorizationServiceConfiguration, request: MeRequest): Promise<MeResponse>;
}
export declare class MeRequestHandler implements MeRequestHandler {
    readonly requestor: Requestor;
    readonly utils: QueryStringUtils;
    constructor(requestor?: Requestor, utils?: QueryStringUtils);
}
