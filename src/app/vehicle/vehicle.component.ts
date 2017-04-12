import { Component, OnInit } from '@angular/core';
import {Vehicle} from './vehicle';

import {VehicleObserver} from './vehicle.observer';
import {VehicleService} from './vehicle.service';

import {VehicleStoreData} from './state/vehicle-store-data';
import {Observable} from 'rxjs';
import {LoadAction} from './actions/load-action';
import {Store} from '@ngrx/store';


const CARS: Vehicle[] = [
  { id: 11, content: 'Audi' },
  { id: 12, content: 'Bugatti' },
  { id: 13, content: 'Chev' },
  { id: 14, content: 'Dodge' },
];

export function stateToVehiclesSelector(state: VehicleStoreData):Vehicle[] {
  return state.vehicles;
}

@Component({
  selector: 'vehicle-home',
  templateUrl: './vehicle.component.html',
})

export class VehicleComponent implements OnInit {
  cars: Array<Vehicle> = [];
  vehicles$: Observable<Array<Vehicle>>;
  constructor(private store: Store<VehicleStoreData>, vehicleObserver: VehicleObserver, vehicleService: VehicleService) {

    vehicleObserver.attach(this)
    vehicleService.getAll().subscribe(vehicleObserver);

    this.vehicles$ = store.select(stateToVehiclesSelector);
  }
  public setVehicles(vehicles: Vehicle[]){

    this.cars = vehicles;
  }
  ngOnInit() {
    this.store.dispatch(new LoadAction());
  }
}

