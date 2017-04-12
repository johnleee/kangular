import {VehicleStoreData, INITIAL_VEHICLE_STORE_DATA} from '../state/vehicle-store-data';
import {DISPLAY_ACTION} from '../actions/display-action';
import {Action} from '@ngrx/store';



export function vehicleStoreDataReducer(state: VehicleStoreData = INITIAL_VEHICLE_STORE_DATA , action: Action): VehicleStoreData {
  switch (action.type)  {
    case DISPLAY_ACTION:
      return {vehicles: action.payload};
    default:
      return state;
  }
}
