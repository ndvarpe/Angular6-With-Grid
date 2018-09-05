"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var alert_1 = require("../../models/alert");
var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs_1.Subject();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    // subscribe to alerts
    AlertService.prototype.getAlert = function (alertId) {
        return this.subject.asObservable().pipe(operators_1.filter(function (x) { return x && x.alertId === alertId; }));
    };
    // convenience methods
    AlertService.prototype.success = function (message) {
        this.alert(new alert_1.Alert({ message: message, type: alert_1.AlertType.Success }));
    };
    AlertService.prototype.error = function (message) {
        this.alert(new alert_1.Alert({ message: message, type: alert_1.AlertType.Error }));
    };
    // main alert method    
    AlertService.prototype.alert = function (alert) {
        this.keepAfterRouteChange = alert.keepAfterRouteChange;
        this.subject.next(alert);
    };
    // clear alerts
    AlertService.prototype.clear = function (alertId) {
        this.subject.next(new alert_1.Alert({ alertId: alertId }));
    };
    AlertService = __decorate([
        core_1.Injectable()
    ], AlertService);
    return AlertService;
}());
exports.AlertService = AlertService;
//# sourceMappingURL=alert.service.js.map