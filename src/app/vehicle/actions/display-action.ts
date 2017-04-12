import {Action} from '@ngrx/store';
import {Vehicle} from '../vehicle';

export const DISPLAY_ACTION:string = 'DISPLAY_ACTION';

export class DisplayAction implements Action {
  readonly type = DISPLAY_ACTION;
  constructor(public payload?:Vehicle[]) {    }
}
