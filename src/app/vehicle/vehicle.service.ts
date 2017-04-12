import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs';
import {Vehicle} from './vehicle';

@Injectable()
export class VehicleService {

  private baseUrl = 'http://localhost:8080/api/vehicle/byLoginId/1';

  constructor(private http: Http) {
  }

  public getAll = (): Observable<Vehicle[]> => {
    return this.http.get(this.baseUrl)
      .map((res:Response) => res.json().content)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
