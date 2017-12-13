import { Action as  NgRxAction } from '@ngrx/store';

export const SAVE = 'SAVE';

export interface ShowsAction extends NgRxAction {
  payload?: any;
}

export function showsReducer(state = [], action: ShowsAction) {
  switch (action.type) {
    case SAVE:
      return Object.assign(state, action.payload.map((show) => show.show));
    default:
      return state;
  }
}
