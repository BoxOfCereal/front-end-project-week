import axios from "axios";

export const FETCHING_NOTES = "FETCHING_NOTES";
export const NOTES_FETCHED = "NOTES_FETCHED";
export const FETCHING_NOTE = "FETCHING_NOTE";
export const NOTE_FETCHED = "NOTE_FETCHED";
export const NOTE_CREATED = "NOTES_CREATED";
export const CREATING_NOTE = "CREATING_NOTE";
export const EDITING_NOTE = "EDITING_NOTE";
export const NOTE_EDITED = "NOTE_EDITED";
export const DELETING_NOTE = "DELETING_NOTE";
export const NOTE_DELETED = "NOTE_DELETED";
export const SHOW_DELETE_MODAL = "SHOW_DELETE_MODAL";
export const HIDE_DELETE_MODAL = "HIDE_DELETE_MODAL";
export const LOGGING_IN = "LOGGING_IN";
export const LOGGED_IN = "LOGGED_IN";
export const LOGGING_OUT = "LOGGING_OUT";
export const LOGGED_OUT = "LOGGED_OUT";

export const ERROR = "ERROR";

// a `GET` request to this route will return a list of all the notes.
export function fetchNotes() {
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: NOTES_FETCHED, payload: data });
      })
      .catch(error => dispatch({ type: ERROR, payload: `${error}` }));
  };
}

// a `GET` request to this route will return the note with the specified ID.
export function fetchNote(id) {
  return dispatch => {
    dispatch({ type: FETCHING_NOTE });
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: NOTE_FETCHED, payload: data });
      })
      .catch(error => dispatch({ type: ERROR, payload: `${error}` }));
  };
}

/* a `POST` request to this route with the title and text in the req.body 
    will create a new note. 
    The response from the server will be the ID of the new note.
  */
export function createNote(note, history) {
  console.log(note);
  return dispatch => {
    dispatch({ type: CREATING_NOTE });
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, note)
      .then(({ data: { success: createdNoteId } }) => {
        dispatch({
          type: NOTE_CREATED,
          payload: { ...note, _id: createdNoteId }
        });
        history.push(`/note/${createdNoteId}`);
      })
      .catch(error => dispatch({ type: ERROR, payload: `${error}` }));
  };
}

/*a `PUT` request to this route with the title and text in the 
    req body will edit the note with the specified ID. 
    The response from the server will be the updated note object.
  */
export function editNote(_id, note, history) {
  return dispatch => {
    dispatch({ type: EDITING_NOTE });
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${_id}`, note)
      .then(({ data }) => {
        dispatch({
          type: NOTE_EDITED,
          payload: { ...data }
        });
        history.push(`/note/${_id}`);
      })
      .catch(error => dispatch({ type: ERROR, payload: `${error}` }));
  };
}

export function deleteNote(_id, history) {
  return dispatch => {
    dispatch({ type: DELETING_NOTE });
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${_id}`)
      .then(({ data: { success } }) => {
        dispatch({
          type: NOTE_EDITED,
          payload: _id
        });
        history.push(`/`);
      })
      .catch(error => dispatch({ type: ERROR, payload: `${error}` }));
  };
}

// Show Delete Modal inside EditNote Component
export function displayDeleteModal() {
  console.log("test");
  return {
    type: SHOW_DELETE_MODAL
  };
}

// Hide Delete Modal inside EditNote Component
export function hideDeleteModal() {
  return {
    type: HIDE_DELETE_MODAL
  };
}

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
