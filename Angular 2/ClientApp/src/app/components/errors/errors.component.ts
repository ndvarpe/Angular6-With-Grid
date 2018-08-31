import { Component } from '@angular/core';
import { ErrorsService } from './errors.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html'
})
export class ErrorsComponent {
  constructor(public errorsService: ErrorsService) { }
}
