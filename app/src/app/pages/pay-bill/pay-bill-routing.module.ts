import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayBillComponent } from './pay-bill.component';

const routes: Routes = [
  { path: '', component: PayBillComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayBillRoutingModule { }
