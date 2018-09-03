import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FunnelComponent } from './components/funnel/funnel.component';
import { StatusComponent } from './components/status/status.component';
import { httpInterceptorProviders } from '../http-interceptors/index';
import { HttpErrorHandler } from '../common-services/error-handler/http-error-handler.service';
import { AlertComponent } from './common-directives/alert/alert.component';
import { AlertService } from '../common-services/alert/alert.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FunnelComponent,
    StatusComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'funnel', component: FunnelComponent },
      { path: 'status', component: StatusComponent }
    ])
  ],
  providers: [httpInterceptorProviders, HttpErrorHandler, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
