import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayBillRoutingModule } from './pay-bill-routing.module';
import { PayBillComponent } from './pay-bill.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PayBillRoutingModule,
    SharedModule
  ],
  declarations: [PayBillComponent]
})
export class PayBillModule { }
