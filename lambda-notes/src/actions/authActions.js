export const LOGGING_IN = "LOGGING_IN";
export const LOGGED_IN = "LOGGED_IN";
export const LOGGING_OUT = "LOGGING_OUT";
export const LOGGED_OUT = "LOGGED_OUT";
export const ERROR = "ERROR";

// simulate server call
const fakeLogin = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username !== "nole" && password !== "something") {
        reject("User Does Not Exist");
      } else {
        resolve(username);
      }
    }, 1000);
  });
};

//  mock up login function
//userinfo is an object
export function login(userinfo, history) {
  return dispatch => {
    dispatch({ type: LOGGING_IN });
    fakeLogin(userinfo)
      .then(user => {
        dispatch({ type: LOGGED_IN, payload: user });
      })
      .catch(error => dispatch({ type: ERROR, payload: error }));
  };
}

export function logout(history) {
  return dispatch => {
    dispatch({ type: LOGGING_OUT });
    dispatch({ type: LOGGED_OUT });
  };
}
