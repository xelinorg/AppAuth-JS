"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeError = exports.MeResponse = void 0;
var MeResponse = /** @class */ (function () {
    function MeResponse(response) {
        this.sub = response.sub;
        this.website = response.website;
        this.gender = response.gender;
        this.name = response.name;
    }
    MeResponse.prototype.toJson = function () {
        return { sub: this.sub || '' };
    };
    return MeResponse;
}());
exports.MeResponse = MeResponse;
/**
 * Represents the Token Error type.
 * For more information look at:
 * https://tools.ietf.org/html/rfc6749#section-5.2
 */
var MeError = /** @class */ (function () {
    function MeError(meError) {
        this.error = meError.error;
        this.errorDescription = meError.error_description;
        this.errorUri = meError.error_uri;
        this.sub = '';
    }
    MeError.prototype.toJson = function () {
        return {
            error: this.error, error_description: this.errorDescription, error_uri: this.errorUri, sub: ''
        };
    };
    return MeError;
}());
exports.MeError = MeError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVfcmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbWVfcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBbUJBO0lBS0Usb0JBQVksUUFBd0I7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0UsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBQyxDQUFDO0lBQy9CLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksZ0NBQVU7QUFpQnZCOzs7O0dBSUc7QUFDSDtJQU1FLGlCQUFZLE9BQW9CO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsd0JBQU0sR0FBTjtRQUNFLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUU7U0FDL0YsQ0FBQTtJQUNILENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgTWVSZXNwb25zZUpzb24ge1xuICBzdWI6IHN0cmluZztcbiAgd2Vic2l0ZT86IHN0cmluZztcbiAgZ2VuZGVyPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgRXJyb3JUeXBlID0gJ2ludmFsaWRfcmVxdWVzdCd8J2ludmFsaWRfY2xpZW50J3wnaW52YWxpZF9ncmFudCd8J3VuYXV0aG9yaXplZF9jbGllbnQnfFxuICAgICd1bnN1cHBvcnRlZF9ncmFudF90eXBlJ3wnaW52YWxpZF9zY29wZSc7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgVG9rZW5FcnJvciBhcyBhIEpTT04gT2JqZWN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1lRXJyb3JKc29uIHtcbiAgZXJyb3I6IEVycm9yVHlwZTtcbiAgZXJyb3JfZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGVycm9yX3VyaT86IHN0cmluZztcbiAgc3ViOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBNZVJlc3BvbnNlIHtcbiAgc3ViOiBzdHJpbmc7XG4gIHdlYnNpdGU/OiBzdHJpbmc7XG4gIGdlbmRlcj86IHN0cmluZ1xuICBuYW1lPzogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihyZXNwb25zZTogTWVSZXNwb25zZUpzb24pIHtcbiAgICB0aGlzLnN1YiA9IHJlc3BvbnNlLnN1YjtcbiAgICB0aGlzLndlYnNpdGUgPSByZXNwb25zZS53ZWJzaXRlO1xuICAgIHRoaXMuZ2VuZGVyID0gcmVzcG9uc2UuZ2VuZGVyO1xuICAgIHRoaXMubmFtZSA9IHJlc3BvbnNlLm5hbWU7XG4gIH1cblxuICB0b0pzb24oKTogTWVSZXNwb25zZUpzb24ge1xuICAgIHJldHVybiB7c3ViOiB0aGlzLnN1YiB8fCAnJ307XG4gIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBUb2tlbiBFcnJvciB0eXBlLlxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gbG9vayBhdDpcbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tNS4yXG4gKi9cbmV4cG9ydCBjbGFzcyBNZUVycm9yIHtcbiAgc3ViOiBzdHJpbmc7XG4gIGVycm9yOiBFcnJvclR5cGU7XG4gIGVycm9yRGVzY3JpcHRpb246IHN0cmluZ3x1bmRlZmluZWQ7XG4gIGVycm9yVXJpOiBzdHJpbmd8dW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKG1lRXJyb3I6IE1lRXJyb3JKc29uKSB7XG4gICAgdGhpcy5lcnJvciA9IG1lRXJyb3IuZXJyb3I7XG4gICAgdGhpcy5lcnJvckRlc2NyaXB0aW9uID0gbWVFcnJvci5lcnJvcl9kZXNjcmlwdGlvbjtcbiAgICB0aGlzLmVycm9yVXJpID0gbWVFcnJvci5lcnJvcl91cmk7XG4gICAgdGhpcy5zdWIgPSAnJztcbiAgfVxuXG4gIHRvSnNvbigpOiBNZUVycm9ySnNvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiB0aGlzLmVycm9yLCBlcnJvcl9kZXNjcmlwdGlvbjogdGhpcy5lcnJvckRlc2NyaXB0aW9uLCBlcnJvcl91cmk6IHRoaXMuZXJyb3JVcmksIHN1YjogJydcbiAgICB9XG4gIH1cbn1cbiJdfQ==