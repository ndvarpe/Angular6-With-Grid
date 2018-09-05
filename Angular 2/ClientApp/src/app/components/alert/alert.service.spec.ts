import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AlertService } from './alert.service';
import { Alert, AlertType } from '../../models/alert';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AlertService]
    });
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  describe('Alert service should be defined', () => {
    it('Alert service is defined', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
      const alertService = getTestBed().get(AlertService);
      expect(alertService).toBeTruthy();
    }));
  });

  describe('Adding alert to alert array', () => {
    it('Add alert to alert array', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
      const alertService = getTestBed().get(AlertService);
      alertService.success('test');
      console.log(alertService);
    }));
  });

});
