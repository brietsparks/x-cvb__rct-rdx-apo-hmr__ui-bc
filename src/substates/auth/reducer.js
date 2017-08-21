import { cloneDeep } from 'lodash';

import { actions } from './constants';

const defaultState = {
  user: {
    id: null,
    attributes: {
      // attributes
    }
  }
};

const authReducer = (initialState = defaultState, action) => {
  const state = cloneDeep(initialState);
  const payload = action.payload;

  switch (action.type) {
    case actions.user.SET.DEFAULT:
      state.user = payload.user;
      break;
  }

  return state;
};

export default authReducer;