import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { VehicleComponent } from './vehicle.component';
import { VehicleService } from './vehicle.service';
import { VehicleObserver } from './vehicle.observer';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [
    VehicleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports: [VehicleComponent],
  providers: [VehicleService, VehicleObserver],
  bootstrap: []
})
export class VehicleModule { }
