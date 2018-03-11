import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraNativeComponent } from './camera-native.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CameraNativeComponent
  ],
  declarations: [CameraNativeComponent]
})
export class CameraNativeModule { }
