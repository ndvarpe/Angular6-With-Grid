"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var LoggingInterceptor = /** @class */ (function () {
    function LoggingInterceptor(alertService) {
        this.alertService = alertService;
    }
    LoggingInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var started = Date.now();
        var ok;
        // extend server response observable with logging
        return next.handle(req)
            .pipe(operators_1.tap(
        // Succeeds when there is a response; ignore other events
        function (event) { return ok = event instanceof http_1.HttpResponse ? 'succeeded' : ''; }, 
        // Operation failed; error is an HttpErrorResponse
        function (error) { return ok = 'failed'; }), 
        // Log when response observable either completes or errors
        operators_1.finalize(function () {
            var elapsed = Date.now() - started;
            var msg = req.method + " \"" + req.urlWithParams + "\"\n             " + ok + " in " + elapsed + " ms.";
            if ("" + ok === 'succeeded')
                _this.alertService.success(msg);
            else
                _this.alertService.error(msg);
        }));
    };
    LoggingInterceptor = __decorate([
        core_1.Injectable()
    ], LoggingInterceptor);
    return LoggingInterceptor;
}());
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=error-logging-interceptor.js.map