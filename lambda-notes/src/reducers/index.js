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
  note: null,
  showDeleteModal: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return {
        ...state,
        fetchingNotes: true,
        notesFetched: false
      };
    case NOTES_FETCHED:
      return {
        ...state,
        fetchingNotes: false,
        notesFetched: true,
        notes: action.payload
      };
    case FETCHING_NOTE:
      return {
        ...state,
        fetchingNote: true,
        noteFetched: false
      };
    case NOTE_FETCHED:
      return {
        ...state,
        fetchingNote: false,
        noteFetched: true,
        note: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
