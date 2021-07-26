"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeError = exports.MeResponse = void 0;
var MeResponse = /** @class */ (function () {
    function MeResponse(response) {
        this.sub = response.sub;
        this.profile = response.profile;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVfcmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbWVfcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBaUJBO0lBSUUsb0JBQVksUUFBd0I7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUNsQyxDQUFDO0lBRUQsMkJBQU0sR0FBTjtRQUNFLE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLGdDQUFVO0FBY3ZCOzs7O0dBSUc7QUFDSDtJQU1FLGlCQUFZLE9BQW9CO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsd0JBQU0sR0FBTjtRQUNFLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUU7U0FDL0YsQ0FBQTtJQUNILENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgTWVSZXNwb25zZUpzb24ge1xuICBzdWI6IHN0cmluZztcbiAgcHJvZmlsZT86IHt3ZWJzaXRlPzogc3RyaW5nLCBnZW5kZXI/OiBzdHJpbmd9XG59XG5leHBvcnQgdHlwZSBFcnJvclR5cGUgPSAnaW52YWxpZF9yZXF1ZXN0J3wnaW52YWxpZF9jbGllbnQnfCdpbnZhbGlkX2dyYW50J3wndW5hdXRob3JpemVkX2NsaWVudCd8XG4gICAgJ3Vuc3VwcG9ydGVkX2dyYW50X3R5cGUnfCdpbnZhbGlkX3Njb3BlJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBUb2tlbkVycm9yIGFzIGEgSlNPTiBPYmplY3QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWVFcnJvckpzb24ge1xuICBlcnJvcjogRXJyb3JUeXBlO1xuICBlcnJvcl9kZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZXJyb3JfdXJpPzogc3RyaW5nO1xuICBzdWI6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIE1lUmVzcG9uc2Uge1xuICBzdWI6IHN0cmluZztcbiAgcHJvZmlsZT86IHt3ZWJzaXRlPzogc3RyaW5nLCBnZW5kZXI/OiBzdHJpbmd9XG5cbiAgY29uc3RydWN0b3IocmVzcG9uc2U6IE1lUmVzcG9uc2VKc29uKSB7XG4gICAgdGhpcy5zdWIgPSByZXNwb25zZS5zdWI7XG4gICAgdGhpcy5wcm9maWxlID0gcmVzcG9uc2UucHJvZmlsZTtcbiAgfVxuXG4gIHRvSnNvbigpOiBNZVJlc3BvbnNlSnNvbiB7XG4gICAgcmV0dXJuIHtzdWI6IHRoaXMuc3ViIHx8ICcnfTtcbiAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIFRva2VuIEVycm9yIHR5cGUuXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBsb29rIGF0OlxuICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY3NDkjc2VjdGlvbi01LjJcbiAqL1xuZXhwb3J0IGNsYXNzIE1lRXJyb3Ige1xuICBzdWI6IHN0cmluZztcbiAgZXJyb3I6IEVycm9yVHlwZTtcbiAgZXJyb3JEZXNjcmlwdGlvbjogc3RyaW5nfHVuZGVmaW5lZDtcbiAgZXJyb3JVcmk6IHN0cmluZ3x1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IobWVFcnJvcjogTWVFcnJvckpzb24pIHtcbiAgICB0aGlzLmVycm9yID0gbWVFcnJvci5lcnJvcjtcbiAgICB0aGlzLmVycm9yRGVzY3JpcHRpb24gPSBtZUVycm9yLmVycm9yX2Rlc2NyaXB0aW9uO1xuICAgIHRoaXMuZXJyb3JVcmkgPSBtZUVycm9yLmVycm9yX3VyaTtcbiAgICB0aGlzLnN1YiA9ICcnO1xuICB9XG5cbiAgdG9Kc29uKCk6IE1lRXJyb3JKc29uIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHRoaXMuZXJyb3IsIGVycm9yX2Rlc2NyaXB0aW9uOiB0aGlzLmVycm9yRGVzY3JpcHRpb24sIGVycm9yX3VyaTogdGhpcy5lcnJvclVyaSwgc3ViOiAnJ1xuICAgIH1cbiAgfVxufVxuIl19