import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendMoneyRoutingModule } from './send-money-routing.module';
import { SendMoneyComponent } from './send-money.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SendMoneyRoutingModule,
    SharedModule
  ],
  declarations: [SendMoneyComponent]
})
export class SendMoneyModule { }
