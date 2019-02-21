import {
  LOGGING_IN,
  LOGGED_IN,
  LOGGING_OUT,
  LOGGED_OUT,
  ERROR
} from "../actions";

const initialState = {
  loggingIn: false,
  loggedIn: false,
  loggingOut: false,
  loggedOut: false,
  user: ""
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true,
        loggedIn: false,
        loggingOut: false,
        loggedOut: false,
        user: ""
      };
    case LOGGED_IN:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        loggingOut: false,
        loggedOut: false,
        user: action.payload
      };
    case LOGGING_OUT:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        loggingOut: true,
        loggedOut: false,
        user: ""
      };
    case LOGGED_OUT:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        loggingOut: false,
        loggedOut: true,
        user: ""
      };

    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
