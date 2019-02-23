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
export const UPDATE_SEARCH_TERM = "UPDATE_SEARCH_TERM";

export const SORT_BY_TITLE_A_TO_Z = "SORT_BY_TITLE_A_TO_Z";
export const SORT_BY_TITLE_Z_TO_A = "SORT_BY_TITLE_Z_TO_A";
export const SORT_BY_TITLE_NEWEST = "SORT_BY_TITLE_NEWEST";
export const SORT_BY_TITLE_OLDEST = "SORT_BY_TITLE_OLDEST";
export const REMOVE_SORT = "REMOVE_SORT";

export const EXPORTING_NOTES_TO_CSV = "EXPORTING_NOTES_TO_CSV";
export const EXPORTED_NOTES_TO_CSV = "EXPORT_NOTES_TO_CSV";

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

//sets the search term for the notes search
export function setSearchTerm(s) {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: s
  };
}

export function sortByTitleAToZ() {
  return {
    type: SORT_BY_TITLE_A_TO_Z,
    payload: "a-z"
  };
}

export function sortByTitleZToA() {
  return {
    type: SORT_BY_TITLE_Z_TO_A,
    payload: "z-a"
  };
}

export function sortByTitleNewest() {
  return {
    type: SORT_BY_TITLE_NEWEST,
    payload: "newest"
  };
}

export function sortByTitleOldest() {
  return {
    type: SORT_BY_TITLE_OLDEST,
    payload: "oldest"
  };
}

export function removeSort() {
  return {
    type: REMOVE_SORT,
    payload: "default"
  };
}

//  adapted from https://stackoverflow.com/a/31536517
const convertNotesToCSV = objArr => {
  const json = objArr;
  const header = Object.keys(json[0]);
  const replacer = function(key, value) {
    if (value === null) return "";
    if (Array.isArray(value)) return value.join(" ");
    return value;
  };
  /*
    for each item or row inside the JSON
    we want to map over the potential header that they'll have
    and get a string of version of the  field name or key
    at that row. The replacer will be used to handle edge cases
  */
  const csv = json.map(row =>
    header.map(fieldName => JSON.stringify(row[fieldName], replacer))
  );
  csv.unshift(header.join(","));
  const csvText = csv.join("\r\n");
  return csvText;
};

//convert objArr to blob and download it
const downloadBlob = (name, objArr) => {
  const blob = new Blob(["\ufeff", objArr], {
    type: "text/csv"
  });
  const date = new Date().toDateString();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = `${name} ${date}.csv`;
  a.click();
  //static method releases an existing object URL which was previously created by calling URL.createObjectURL().
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};

/*it was suggested to use thunk to get the current state
  and I wanna do this instead of making a server call
  because I want what is downloaded reflect what the client sees,
  This also all feels super hacky
*/
export function exportNotesToCSV() {
  return (dispatch, getState) => {
    const { notes } = getState().notesReducer;
    dispatch({ type: EXPORTING_NOTES_TO_CSV });

    downloadBlob(`Notes`, convertNotesToCSV(notes));
    dispatch({ type: EXPORTED_NOTES_TO_CSV });
  };
}
