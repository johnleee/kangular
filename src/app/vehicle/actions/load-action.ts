import {Action} from '@ngrx/store';

export const LOAD_ACTION = "LOAD_ACTION";

export class LoadAction implements Action {
  readonly type = LOAD_ACTION;
  constructor() {    }
}
