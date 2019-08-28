import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrpayrollComponent } from './hrpayroll.component';

const routes: Routes = [
  {path: '', component: HrpayrollComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrpayrollRoutingModule { }
