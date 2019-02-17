import axios from "axios";

export const FETCHING_NOTES = "FETCHING_NOTES";
export const NOTES_FETCHED = "NOTES_FETCHED";
export const FETCHING_NOTE = "FETCHING_NOTE";
export const NOTE_FETCHED = "NOTE_FETCHED";
export const NOTE_SAVED = "NOTES_SAVED";
export const SAVING_NOTE = "SAVING_NOTE";
export const EDITING_NOTE = "EDITING_NOTE";
export const NOTE_EDITED = "NOTE_EDITED";
export const DELETING_NOTE = "DELETING_NOTE";
export const NOTE_DELETED = "NOTE_DELETED";
export const SHOW_DELETE_MODAL = "SHOW_DELETE_MODAL";
export const HIDE_DELETE_MODAL = "HIDE_DELETE_MODAL";
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
