import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NearBranchesComponent } from './near-branches.component';

const routes: Routes = [
  { path: '', component: NearBranchesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NearBranchesRoutingModule { }
