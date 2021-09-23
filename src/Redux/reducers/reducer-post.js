import { postActions as types } from '../actionTypes';
import { updateState } from '../../Middlewares/utils';

const defaultState = {
 posts: [],
 searchTerm: "",
 serchResult: []
};

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case types.FETCH_POSTS:
      return updateState(state, { ...actions.payload });
    case types.ADD_POSTS:
      return updateState(state, { ...actions.payload });
    case types.UPDATE_POSTS:
      return updateState(state, { ...actions.payload });
    default:
      return state;
  }
};
