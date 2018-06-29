import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';

import { WebRTCService } from './native-features/web-rtc/web-rtc.service';
import { ListComponent } from './components/list/list.component';
import { AlertComponent } from './components/alert/alert.component';
import { CameraNativeComponent } from './native-features/camera-native/camera-native.component';
import { PushNotificationService } from './native-features/push-notification/push-notification.service';
import { InputComponent } from './components/input/input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    HeaderComponent,
    ListComponent,
    AlertComponent,
    CameraNativeComponent,
    InputComponent
  ],
  providers: [
    WebRTCService,
    PushNotificationService
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    ListComponent,
    AlertComponent,
    CameraNativeComponent,
    InputComponent
  ]
})
export class SharedModule { }
