import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { VehicleComponent } from './vehicle.component';
import { VehicleService } from './vehicle.service';
import { VehicleObserver } from './vehicle.observer';
import {CommonModule} from '@angular/common';


import {VehiclesEffects} from './effects/vehicle-effects';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {vehicleStoreDataReducer} from './reducers/vehicle-reducer';


@NgModule({
  declarations: [
    VehicleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(vehicleStoreDataReducer),
    EffectsModule.run(VehiclesEffects),

  ],
  exports: [VehicleComponent],
  providers: [VehicleService, VehicleObserver],
  bootstrap: []
})
export class VehicleModule { }
