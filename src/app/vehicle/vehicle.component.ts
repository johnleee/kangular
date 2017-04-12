import { Component } from '@angular/core';

import {Vehicle} from "./vehicle";
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
}
