import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiveMoneyRoutingModule } from './receive-money-routing.module';
import { ReceiveMoneyComponent } from './receive-money.component';

@NgModule({
  imports: [
    CommonModule,
    ReceiveMoneyRoutingModule
  ],
  declarations: [ReceiveMoneyComponent]
})
export class ReceiveMoneyModule { }
