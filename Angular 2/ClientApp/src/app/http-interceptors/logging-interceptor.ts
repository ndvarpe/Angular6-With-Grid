import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse
} from '@angular/common/http';

import { finalize, tap } from 'rxjs/operators';
import { AlertService } from '../components/alert/alert.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private alertService: AlertService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;
    let result: any;

    // extend server response observable with logging
    return next.handle(req)
      .pipe(
        tap(
          // Succeeds when there is a response; ignore other events
          event => {
            ok = event instanceof HttpResponse ? 'succeeded' : '';
            result = event
          },
          // Operation failed; error is an HttpErrorResponse
        error => {
          ok = 'failed';
          result = event
        }
        ),
        // Log when response observable either completes or errors
      finalize(() => {
        let resultMessage = result.currentTarget.response;
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms. with result as ${result.currentTarget.response}`;
          if (`${ok}` === 'succeeded')
            this.alertService.success(msg);
          else
            this.alertService.error(msg);
        })
      );
  }
}
