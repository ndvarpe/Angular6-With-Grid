import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LoggingInterceptor } from './logging-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe(`LoggingInterceptor`, () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoggingInterceptor,
          multi: true,
        },
      ],
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Has start time initialized', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {

    http.get('/data').subscribe(
      response => {
        expect(response).toBeTruthy();
      }
    );

    //const req = httpMock.expectOne(req => req);
    //expect(req.request.method).toEqual('GET');

    //req.flush({ hello: 'world' });
    httpMock.verify();
  }));
});
