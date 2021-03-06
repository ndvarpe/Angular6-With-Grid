import { Injectable } from "@angular/core";
import { IFunnel } from "../../models/funnel";
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class FunnelService {
  funnelsUrl: string = 'https://localhost:44337/api/Funnel';
  private handleError: any;
  constructor(private http: HttpClient) {
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
      tap(data => console.log('All: ' + JSON.stringify(data)))
    );
  }
}
