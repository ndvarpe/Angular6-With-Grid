import { Injectable } from "@angular/core";
import { IFunnel } from "../../models/funnel";
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators"
import { HttpErrorHandler, HandleError } from '../../../common-services/error-handler/http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class FunnelService {
  private funnelsUrl = 'https://localhost:44337/api/Funnel';
  private handleError: HandleError;
  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('FunnelService');
  }

  //private handleError(err: HttpErrorResponse) {
  //  let errorMessage = '';
  //  if (err.error instanceof ErrorEvent) {
  //    errorMessage = `An error occured: ${err.error.message}`;
  //  }
  //  else {
  //    errorMessage = `Server returned code:${err.status}, error message is: ${err.message}`;
  //  }
  //  console.log(errorMessage);
  //  return throwError(errorMessage);
  //}
  getFunnels(): Observable<IFunnel[]> {
    return this.http.get<IFunnel[]>(this.funnelsUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError('getFunnels', []))
    );
  }
}
