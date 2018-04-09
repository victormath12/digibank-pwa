import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

import { PushNotificationService } from '../../native/push-notification/push-notification-service.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    PushNotificationService
  ]
})
export class HomeModule { }
