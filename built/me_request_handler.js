"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeRequestHandler = void 0;
var me_response_1 = require("./me_response");
var query_string_utils_1 = require("./query_string_utils");
var xhr_1 = require("./xhr");
var MeRequestHandler = /** @class */ (function () {
    function MeRequestHandler(requestor, utils) {
        if (requestor === void 0) { requestor = new xhr_1.JQueryRequestor(); }
        if (utils === void 0) { utils = new query_string_utils_1.BasicQueryStringUtils(); }
        this.requestor = requestor;
        this.utils = utils;
    }
    MeRequestHandler.prototype.performMeRequest = function (configuration, request) {
        return this.requestor
            .xhr({
            url: configuration.userInfoEndpoint,
            method: 'GET',
            headers: { 'Authorization': 'Bearer '.concat(request.token) }
        })
            .then(function (response) {
            return new me_response_1.MeResponse(response);
        });
    };
    return MeRequestHandler;
}());
exports.MeRequestHandler = MeRequestHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVfcmVxdWVzdF9oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21lX3JlcXVlc3RfaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSw2Q0FBK0U7QUFDL0UsMkRBQTZFO0FBQzdFLDZCQUFpRDtBQU9qRDtJQUNFLDBCQUNvQixTQUE0QyxFQUM1QyxLQUFxRDtRQURyRCwwQkFBQSxFQUFBLGdCQUEyQixxQkFBZSxFQUFFO1FBQzVDLHNCQUFBLEVBQUEsWUFBOEIsMENBQXFCLEVBQUU7UUFEckQsY0FBUyxHQUFULFNBQVMsQ0FBbUM7UUFDNUMsVUFBSyxHQUFMLEtBQUssQ0FBZ0Q7SUFBRyxDQUFDO0lBRzdFLDJDQUFnQixHQUFoQixVQUFpQixhQUFnRCxFQUFFLE9BQWtCO1FBRW5GLE9BQU8sSUFBSSxDQUFDLFNBQVM7YUFDaEIsR0FBRyxDQUE2QjtZQUMvQixHQUFHLEVBQUUsYUFBYSxDQUFDLGdCQUFnQjtZQUNuQyxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxFQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQztTQUM1RCxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUNaLE9BQU8sSUFBSSx3QkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1dGhvcml6YXRpb25TZXJ2aWNlQ29uZmlndXJhdGlvbn0gZnJvbSAnLi9hdXRob3JpemF0aW9uX3NlcnZpY2VfY29uZmlndXJhdGlvbic7XG5pbXBvcnQge0FwcEF1dGhFcnJvcn0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHtNZVJlcXVlc3R9IGZyb20gJy4vbWVfcmVxdWVzdCc7XG5pbXBvcnQge01lRXJyb3IsIE1lRXJyb3JKc29uLCBNZVJlc3BvbnNlLCBNZVJlc3BvbnNlSnNvbn0gZnJvbSAnLi9tZV9yZXNwb25zZSc7XG5pbXBvcnQge0Jhc2ljUXVlcnlTdHJpbmdVdGlscywgUXVlcnlTdHJpbmdVdGlsc30gZnJvbSAnLi9xdWVyeV9zdHJpbmdfdXRpbHMnO1xuaW1wb3J0IHtKUXVlcnlSZXF1ZXN0b3IsIFJlcXVlc3Rvcn0gZnJvbSAnLi94aHInO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lUmVxdWVzdEhhbmRsZXIge1xuICBwZXJmb3JtTWVSZXF1ZXN0KGNvbmZpZ3VyYXRpb246IEF1dGhvcml6YXRpb25TZXJ2aWNlQ29uZmlndXJhdGlvbiwgcmVxdWVzdDogTWVSZXF1ZXN0KTpcbiAgICAgIFByb21pc2U8TWVSZXNwb25zZT47XG59XG5cbmV4cG9ydCBjbGFzcyBNZVJlcXVlc3RIYW5kbGVyIGltcGxlbWVudHMgTWVSZXF1ZXN0SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHJlYWRvbmx5IHJlcXVlc3RvcjogUmVxdWVzdG9yID0gbmV3IEpRdWVyeVJlcXVlc3RvcigpLFxuICAgICAgcHVibGljIHJlYWRvbmx5IHV0aWxzOiBRdWVyeVN0cmluZ1V0aWxzID0gbmV3IEJhc2ljUXVlcnlTdHJpbmdVdGlscygpKSB7fVxuXG5cbiAgcGVyZm9ybU1lUmVxdWVzdChjb25maWd1cmF0aW9uOiBBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb24sIHJlcXVlc3Q6IE1lUmVxdWVzdCk6XG4gICAgICBQcm9taXNlPE1lUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0b3JcbiAgICAgICAgLnhocjxNZVJlc3BvbnNlSnNvbnxNZUVycm9ySnNvbj4oe1xuICAgICAgICAgIHVybDogY29uZmlndXJhdGlvbi51c2VySW5mb0VuZHBvaW50LFxuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgaGVhZGVyczogeydBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnLmNvbmNhdChyZXF1ZXN0LnRva2VuKX1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgTWVSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICB9XG59XG4iXX0=