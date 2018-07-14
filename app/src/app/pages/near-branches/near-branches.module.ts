import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NearBranchesRoutingModule } from './near-branches-routing.module';
import { NearBranchesComponent } from './near-branches.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NearBranchesRoutingModule,
    SharedModule
  ],
  declarations: [NearBranchesComponent]
})
export class NearBranchesModule { }
