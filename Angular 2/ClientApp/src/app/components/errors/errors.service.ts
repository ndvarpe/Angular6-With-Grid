import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  errorMessages: string[] = [];

  add(errorMessage: string) {
    this.errorMessages.push(errorMessage);
  }

  clear() {
    this.errorMessages = [];
  }
}
