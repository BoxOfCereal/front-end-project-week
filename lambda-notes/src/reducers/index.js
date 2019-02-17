import {
  FETCHING_NOTES,
  NOTES_FETCHED,
  FETCHING_NOTE,
  NOTE_FETCHED,
  NOTE_SAVED,
  SAVING_NOTE,
  EDITING_NOTES,
  NOTE_EDITED,
  SHOW_DELETE_MODAL,
  HIDE_DELETE_MODAL,
  DELETING_NOTE,
  NOTE_DELETED,
  ERROR
} from "../actions";

const initialState = {
  fetchingNotes: false,
  notesFetched: false,
  noteSaved: false,
  savingNote: false,
  editingNote: false,
  noteEdited: false,
  deletingNote: false,
  noteDeleted: false,
  notes: [],
  error: null,
  currentNote: null,
  showDeleteModal: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
