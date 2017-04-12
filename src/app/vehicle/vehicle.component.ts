import { Component } from '@angular/core';
import {Vehicle} from './vehicle';

import {VehicleObserver} from './vehicle.observer';
import {VehicleService} from './vehicle.service';

const CARS: Vehicle[] = [
  { id: 11, content: 'Audi' },
  { id: 12, content: 'Bugatti' },
  { id: 13, content: 'Chev' },
  { id: 14, content: 'Dodge' },
];

@Component({
  selector: 'vehicle-home',
  templateUrl: './vehicle.component.html',
})
export class VehicleComponent {
  cars = CARS;

  public constructor(vehicleObserver: VehicleObserver, vehicleService: VehicleService) {
    vehicleObserver.attach(this);
    vehicleService.getAll().subscribe(vehicleObserver);
  }

  public setVehicle(vehicle: Vehicle) {
    this.cars = [vehicle];
  }

  public setVehicles(vehicles: Vehicle[]) {
    this.cars = vehicles;
  }

}
