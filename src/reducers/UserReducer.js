import {
  START_GET_USERS,
  COMPLETE_GET_USERS,
  ERROR_GET_USERS,
  START_GET_USER_BY_ID,
  COMPLETE_GET_USER_BY_ID,
  ERROR_GET_USER_BY_ID,
} from '../actions/types';
// getUsers es el reducer, logicamente se asociará a una función.
// un reducer se componen de un switch donde por medio del dispatch se invoque
//  a una action en particular
export const getUsers = (state = [], action) => {
  switch (action.type) {
    case START_GET_USERS:
      return action;
    case COMPLETE_GET_USERS:
      return action;
    case ERROR_GET_USERS:
      return action;
    default:
      return state;
  }
};

export const getUserById = (state = [], action) => {
  switch (action.type) {
    case START_GET_USER_BY_ID:
      return action;
    case COMPLETE_GET_USER_BY_ID:
      return action;
    case ERROR_GET_USER_BY_ID:
      return action;
    default:
      return state;
  }
};

