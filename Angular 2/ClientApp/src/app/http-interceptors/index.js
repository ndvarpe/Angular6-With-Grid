"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* "Barrel" of Http Interceptors */
var http_1 = require("@angular/common/http");
var logging_interceptor_1 = require("./logging-interceptor");
/** Http interceptor providers in outside-in order */
exports.httpInterceptorProviders = [
    { provide: http_1.HTTP_INTERCEPTORS, useClass: logging_interceptor_1.LoggingInterceptor, multi: true }
];
//# sourceMappingURL=index.js.map