import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { LoginModule } from './pages/login/login.module';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRouting,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AngularFireModule,
    AngularFireDatabase,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
