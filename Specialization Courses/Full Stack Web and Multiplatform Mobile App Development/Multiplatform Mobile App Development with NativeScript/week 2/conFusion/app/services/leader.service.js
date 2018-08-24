"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/catch");
/*  Generated class for the DishProvider provider.  See https://angular.io/docs/ts/latest/guide/dependency-injection.html  for more info on providers and Angular 2 DI. */
var LeaderService = (function () {
    function LeaderService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    LeaderService.prototype.getLeaders = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'leaders')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    LeaderService.prototype.getLeader = function (id) {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'leaders/' + id)
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'leaders?featured=true')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res)[0]; })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    LeaderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], LeaderService);
    return LeaderService;
}());
exports.LeaderService = LeaderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsZWFkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxzQ0FBK0M7QUFDL0MsNkNBQTRDO0FBQzVDLHFFQUFrRTtBQUNsRSxpQ0FBK0I7QUFDL0IsbUNBQWlDO0FBQ2pDLG1DQUFpQztBQUVqQywwS0FBMEs7QUFFMUs7SUFFSSx1QkFBbUIsSUFBVSxFQUNqQixxQkFBNEM7UUFEckMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNqQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQUksQ0FBQztJQUU3RCxrQ0FBVSxHQUFWO1FBQUEsaUJBSUM7UUFIRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sR0FBRyxTQUFTLENBQUM7YUFDeEMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFNLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BFLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsRUFBVTtRQUFwQixpQkFJQztRQUhHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxHQUFHLFVBQVUsR0FBRSxFQUFFLENBQUM7YUFDN0MsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFNLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BFLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFBQSxpQkFJQztRQUhHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxHQUFHLHVCQUF1QixDQUFDO2FBQ3RELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2RSxLQUFLLENBQUMsVUFBQSxLQUFLLElBQU0sTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBckJRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FHZ0IsV0FBSTtZQUNNLCtDQUFxQjtPQUgvQyxhQUFhLENBc0J6QjtJQUFELG9CQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7IFxuaW1wb3J0IHsgTGVhZGVyIH0gZnJvbSAnLi4vc2hhcmVkL2xlYWRlcic7IFxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7IFxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJzsgXG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwnOyBcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZSB9IGZyb20gJy4vcHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UnOyBcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJzsgXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5JzsgXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcblxuLyogIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIERpc2hQcm92aWRlciBwcm92aWRlci4gIFNlZSBodHRwczovL2FuZ3VsYXIuaW8vZG9jcy90cy9sYXRlc3QvZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24uaHRtbCAgZm9yIG1vcmUgaW5mbyBvbiBwcm92aWRlcnMgYW5kIEFuZ3VsYXIgMiBESS4gKi8gXG5ASW5qZWN0YWJsZSgpIFxuZXhwb3J0IGNsYXNzIExlYWRlclNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHAsIFxuICAgICAgICBwcml2YXRlIHByb2Nlc3NIVFRQTXNnU2VydmljZTogUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlKSB7IH1cblxuICAgIGdldExlYWRlcnMoKTogT2JzZXJ2YWJsZTxMZWFkZXJbXT4geyBcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYmFzZVVSTCArICdsZWFkZXJzJykgXG4gICAgICAgIC5tYXAocmVzID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmV4dHJhY3REYXRhIChyZXMpOyB9KSBcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlIC5oYW5kbGVFcnJvcihlcnJvcik7IH0pOyBcbiAgICB9XG5cbiAgICBnZXRMZWFkZXIoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8TGVhZGVyPiB7IFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChiYXNlVVJMICsgJ2xlYWRlcnMvJysgaWQpIFxuICAgICAgICAubWFwKHJlcyA9PiB7IHJldHVybiB0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5leHRyYWN0RGF0YSAocmVzKTsgfSkgXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7IHJldHVybiB0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZSAuaGFuZGxlRXJyb3IoZXJyb3IpOyB9KTsgXG4gICAgfVxuXG4gICAgZ2V0RmVhdHVyZWRMZWFkZXIoKTogT2JzZXJ2YWJsZTxMZWFkZXI+IHsgXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGJhc2VVUkwgKyAnbGVhZGVycz9mZWF0dXJlZD10cnVlJykgXG4gICAgICAgIC5tYXAocmVzID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmV4dHJhY3REYXRhIChyZXMpWzBdOyB9KSBcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlIC5oYW5kbGVFcnJvcihlcnJvcik7IH0pOyBcbiAgICB9XG59Il19