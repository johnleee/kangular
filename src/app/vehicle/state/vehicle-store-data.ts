import {Vehicle} from '../vehicle';


export interface VehicleStoreData {
  vehicles: Vehicle[];
}
export const INITIAL_VEHICLE_STORE_DATA: VehicleStoreData = {
  vehicles: []
};
