import {Observer} from 'rxjs';
import {Vehicle} from './vehicle';
import {VehicleComponent} from './vehicle.component';
import {Injectable} from '@angular/core';


@Injectable()
export class VehicleObserver implements Observer<Vehicle[]> {
  app: VehicleComponent;
  constructor() {
  }
  public attach(app: VehicleComponent) {
    this.app = app;
  }
  public next(value: Vehicle[]): void {
    this.app.setVehicles(value);
  }
  error(err: any) {
    console.error(err);
  }
  complete() {
  }
}
