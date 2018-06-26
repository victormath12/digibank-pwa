import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraCaptureComponent } from './camera-capture.component';
import { RouterModule } from '@angular/router';
import { CameraCaptureRoutingModule } from './camera-capture.routing';
import { CameraNativeModule } from '../../native/camera-native/camera-native.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CameraCaptureRoutingModule,
    SharedModule,
    CameraNativeModule
  ],
  declarations: [CameraCaptureComponent]
})
export class CameraCaptureModule { }
