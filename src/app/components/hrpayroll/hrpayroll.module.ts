import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrpayrollRoutingModule } from './hrpayroll-routing.module';
import { HrpayrollComponent } from './hrpayroll.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HrpayrollComponent
  ],
  imports: [
    CommonModule,
    HrpayrollRoutingModule,
    SharedModule
    
  ]
})
export class HrpayrollModule { }
