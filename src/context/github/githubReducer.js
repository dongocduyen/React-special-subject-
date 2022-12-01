import { SEARCH_USERS, CLEAR_USERS, GET_USER } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        usersData: action.payload,
      };
    case CLEAR_USERS:
      return {
      ...state,
        usersData: [],
        users: {},
      };
    case GET_USER:
      return {
      ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
