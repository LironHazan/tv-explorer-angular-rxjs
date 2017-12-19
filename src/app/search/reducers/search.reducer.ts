import * as actions from '../actions/search.action';

export function searchReducer(state = [], action: actions.Search) {
  switch (action.type) {
    case actions.SEARCH:
      return state;
    default:
      return state;
  }
}
