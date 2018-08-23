import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(http: HttpClient) {
    http.get('https://localhost:44337/api/values/1', { responseType: 'text' }).subscribe(result => {
      console.log(result);
    }, error => console.log(error));
  }
}
