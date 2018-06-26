import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';

import { CameraService } from './native-features/camera-service/camera.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    HeaderComponent
  ],
  providers: [
    CameraService
  ],
  exports: [
    ButtonComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
