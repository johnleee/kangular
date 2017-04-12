import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {LOAD_ACTION} from '../actions/load-action';
import {DisplayAction} from '../actions/display-action';
import {VehicleService} from '../vehicle.service';


@Injectable()
export class VehiclesEffects {
  constructor(private actions$: Actions, private vehicleService: VehicleService) {    }
  @Effect() vehicles: Observable<Action> = this.actions$
    .ofType(LOAD_ACTION)
    .switchMap(action => this.vehicleService.getAll())
    .map(vehicles => new DisplayAction(vehicles));
}
