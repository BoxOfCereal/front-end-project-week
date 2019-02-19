import {
  FETCHING_NOTES,
  NOTES_FETCHED,
  FETCHING_NOTE,
  NOTE_FETCHED,
  NOTE_CREATED,
  CREATING_NOTE,
  EDITING_NOTE,
  NOTE_EDITED,
  DELETING_NOTE,
  NOTE_DELETED,
  SHOW_DELETE_MODAL,
  HIDE_DELETE_MODAL,
  ERROR
} from "../actions";

const initialState = {
  fetchingNotes: false,
  notesFetched: false,
  noteCreated: false,
  creatingNote: false,
  editingNote: false,
  noteEdited: false,
  deletingNote: false,
  noteDeleted: false,
  notes: [],
  error: null,
  note: {
    _id: "",
    tags: [],
    title: "",
    textBody: ""
  },
  showDeleteModal: false
};

function setAllFalse(state) {
  for (let prop in state) {
    if (typeof state[prop] === "boolean") state[prop] = false;
  }
  return { ...state };
}

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
        noteFetched: false,
        note: {
          _id: "",
          tags: [],
          title: "",
          textBody: ""
        }
      };
    case NOTE_FETCHED:
      return {
        ...state,
        fetchingNote: false,
        noteFetched: true,
        note: { ...action.payload }
      };
    case CREATING_NOTE:
      return {
        ...state,
        noteCreated: false,
        creatingNote: true
      };
    case NOTE_CREATED:
      return {
        ...state,
        noteCreated: true,
        creatingNote: false,
        notes: [...state.notes, action.payload]
      };
    case EDITING_NOTE:
      return {
        ...setAllFalse(state),
        editingNote: true,
        noteEdited: false
      };
    case NOTE_EDITED:
      const editedNoteIndex = state.notes.findIndex(
        e => e._id === action.payload._id
      );
      return {
        ...setAllFalse(state),
        editingNote: false,
        noteEdited: true,
        notes: [
          ...state.notes.slice(0, editedNoteIndex),
          action.payload,
          ...state.notes.slice(editedNoteIndex + 1)
        ]
      };
    case DELETING_NOTE:
      return {
        ...setAllFalse(state),
        deletingNote: true,
        noteDeleted: false
      };
    case NOTE_DELETED:
      return {
        ...setAllFalse(state),
        deletingNote: false,
        noteDeleted: true,
        notes: state.notes.filter(note => note._id !== action.payload)
      };
    case SHOW_DELETE_MODAL:
      return {
        ...state,
        showDeleteModal: true
      };
    case HIDE_DELETE_MODAL:
      return {
        ...state,
        showDeleteModal: false
      };
    case ERROR:
      return {
        ...setAllFalse(state),
        error: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
