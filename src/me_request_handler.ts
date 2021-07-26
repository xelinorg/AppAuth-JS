import {AuthorizationServiceConfiguration} from './authorization_service_configuration';
import {AppAuthError} from './errors';
import {MeRequest} from './me_request';
import {MeError, MeErrorJson, MeResponse, MeResponseJson} from './me_response';
import {BasicQueryStringUtils, QueryStringUtils} from './query_string_utils';
import {JQueryRequestor, Requestor} from './xhr';

export interface MeRequestHandler {
  performMeRequest(configuration: AuthorizationServiceConfiguration, request: MeRequest):
      Promise<MeResponse>;
}

export class MeRequestHandler implements MeRequestHandler {
  constructor(
      public readonly requestor: Requestor = new JQueryRequestor(),
      public readonly utils: QueryStringUtils = new BasicQueryStringUtils()) {}


  performMeRequest(configuration: AuthorizationServiceConfiguration, request: MeRequest):
      Promise<MeResponse> {
    return this.requestor
        .xhr<MeResponseJson|MeErrorJson>({
          url: configuration.userInfoEndpoint,
          method: 'GET',
          headers: {'Authorization': 'Bearer '.concat(request.token)}
        })
        .then(response => {
          return new MeResponse(response);
        });
  }
}
