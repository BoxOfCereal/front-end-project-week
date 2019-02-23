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
  UPDATE_SEARCH_TERM,
  SORT_BY_TITLE_A_TO_Z,
  SORT_BY_TITLE_Z_TO_A,
  SORT_BY_TITLE_NEWEST,
  SORT_BY_TITLE_OLDEST,
  REMOVE_SORT,
  EXPORTING_NOTES_TO_CSV,
  EXPORTED_NOTES_TO_CSV,
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
  showDeleteModal: false,
  searchTerm: "",
  sortBy: "",
  exportingNotesToCsv: false,
  exportedNotesToCsv: false,
  csvBlob: null
};

function setAllFalse(state) {
  for (let prop in state) {
    if (typeof state[prop] === "boolean") state[prop] = false;
  }
  return { ...state };
}

export const notesReducer = (state = initialState, action) => {
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
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      };

    case SORT_BY_TITLE_A_TO_Z:
      return {
        ...state,
        sortBy: action.payload,
        notes: [
          ...state.notes.sort((a, b) => {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          })
        ]
      };
    case SORT_BY_TITLE_Z_TO_A:
      return {
        ...state,
        sortBy: action.payload,
        notes: [
          ...state.notes.sort((a, b) => {
            if (a.title < b.title) {
              return 1;
            }
            if (a.title > b.title) {
              return -1;
            }
            return 0;
          })
        ]
      };
    case SORT_BY_TITLE_NEWEST:
      return {
        ...state,
        sortBy: action.payload,
        notes: [
          ...state.notes.sort((a, b) => {
            if (parseInt(a._id, 16) < parseInt(b._id, 16)) {
              return -1;
            }
            if (parseInt(a._id, 16) > parseInt(b._id, 16)) {
              return 1;
            }
            return 0;
          })
        ]
      };
    case SORT_BY_TITLE_OLDEST:
      return {
        ...state,
        sortBy: action.payload,
        notes: [
          ...state.notes.sort((a, b) => {
            if (parseInt(a._id, 16) < parseInt(b._id, 16)) {
              return 1;
            }
            if (parseInt(a._id, 16) > parseInt(b._id, 16)) {
              return -1;
            }
            return 0;
          })
        ]
      };
    case REMOVE_SORT:
      return {
        ...state,
        sortBy: action.payload,
        notes: [
          ...state.notes.sort((a, b) => {
            if (parseInt(a._id, 16) < parseInt(b._id, 16)) {
              return -1;
            }
            if (parseInt(a._id, 16) > parseInt(b._id, 16)) {
              return 1;
            }
            return 0;
          })
        ]
      };
    case EXPORTING_NOTES_TO_CSV:
      return {
        ...state,
        exportingNotesToCsv: true,
        exportedNotesToCsv: false,
        csvBlob: null
      };
    case EXPORTED_NOTES_TO_CSV:
      return {
        ...state,
        exportingNotesToCsv: false,
        exportedNotesToCsv: true,
        csvBlob: action.payload
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

export default notesReducer;
