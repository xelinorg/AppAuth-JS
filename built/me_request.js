"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeRequest = exports.GRANT_TYPE_REFRESH_TOKEN = exports.GRANT_TYPE_AUTHORIZATION_CODE = void 0;
exports.GRANT_TYPE_AUTHORIZATION_CODE = 'authorization_code';
exports.GRANT_TYPE_REFRESH_TOKEN = 'refresh_token';
var MeRequest = /** @class */ (function () {
    function MeRequest(request) {
        this.token = request.token;
    }
    MeRequest.prototype.toJson = function () {
        return { token: this.token };
    };
    MeRequest.prototype.toStringMap = function () {
        var map = { token: this.token };
        return map;
    };
    return MeRequest;
}());
exports.MeRequest = MeRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVfcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tZV9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVhLFFBQUEsNkJBQTZCLEdBQUcsb0JBQW9CLENBQUM7QUFDckQsUUFBQSx3QkFBd0IsR0FBRyxlQUFlLENBQUM7QUFNeEQ7SUFHRSxtQkFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELDBCQUFNLEdBQU47UUFDRSxPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNFLElBQUksR0FBRyxHQUFjLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUN6QyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0cmluZ01hcH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBHUkFOVF9UWVBFX0FVVEhPUklaQVRJT05fQ09ERSA9ICdhdXRob3JpemF0aW9uX2NvZGUnO1xuZXhwb3J0IGNvbnN0IEdSQU5UX1RZUEVfUkVGUkVTSF9UT0tFTiA9ICdyZWZyZXNoX3Rva2VuJztcblxuZXhwb3J0IGludGVyZmFjZSBNZVJlcXVlc3RKc29uIHtcbiAgdG9rZW46IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIE1lUmVxdWVzdCB7XG4gIHRva2VuOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocmVxdWVzdDogTWVSZXF1ZXN0SnNvbikge1xuICAgIHRoaXMudG9rZW4gPSByZXF1ZXN0LnRva2VuO1xuICB9XG5cbiAgdG9Kc29uKCk6IE1lUmVxdWVzdEpzb24ge1xuICAgIHJldHVybiB7dG9rZW46IHRoaXMudG9rZW59O1xuICB9XG5cbiAgdG9TdHJpbmdNYXAoKTogU3RyaW5nTWFwIHtcbiAgICBsZXQgbWFwOiBTdHJpbmdNYXAgPSB7dG9rZW46IHRoaXMudG9rZW59O1xuICAgIHJldHVybiBtYXA7XG4gIH1cbn1cbiJdfQ==