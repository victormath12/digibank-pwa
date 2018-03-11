import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraCaptureComponent } from './camera-capture.component';

const routes: Routes = [
  { path: '', component: CameraCaptureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CameraCaptureRoutingModule { }
