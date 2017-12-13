/**
 * Created by liron on 12/12/2017.
 */
import { Action } from '@ngrx/store';
export const SEARCH = 'Search';

export class Search implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) {}
}
