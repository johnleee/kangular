import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { VehicleComponent } from './vehicle.component';


@NgModule({
  declarations: [
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [VehicleComponent],
  providers: [],
  bootstrap: []
})
export class VehicleModule { }
