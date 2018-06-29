import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraCaptureComponent } from './camera-capture.component';
import { RouterModule } from '@angular/router';
import { CameraCaptureRoutingModule } from './camera-capture.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CameraCaptureRoutingModule,
    SharedModule
  ],
  declarations: [CameraCaptureComponent]
})
export class CameraCaptureModule { }
