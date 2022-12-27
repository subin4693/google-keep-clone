export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FROM_FIREBASE":
      return action.payload.state;
    case "ADD":
      return { ...state, Notes: [...state.Notes, action.payload] };
    case "DELETE_FROM_NOTES":
      return {
        ...state,
        Notes: state.Notes.filter((val) => val.key !== action.payload.key),
        Bin: [...state.Bin, action.payload],
      };
    case "DELETE_FROM_ARCHIVE":
      return {
        ...state,
        Archive: state.Archive.filter((val) => val.key !== action.payload.key),
        Bin: [...state.Bin, action.payload],
      };

    case "ARCHIVE":
      return {
        ...state,
        Notes: state.Notes.filter((val) => val.key !== action.payload.key),
        Archive: [...state.Archive, action.payload],
      };
    case "UNACHIVE":
      return {
        ...state,
        Archive: state.Archive.filter((val) => val.key !== action.payload.key),
        Notes: [...state.Notes, action.payload],
      };

    case "UNDELETE":
      return {
        ...state,
        Bin: state.Bin.filter((val) => val.key !== action.payload.key),
        Notes: [...state.Notes, action.payload],
      };
    case "DELETE_PERMANENT":
      return {
        ...state,
        Bin: state.Bin.filter((val) => val.key !== action.payload.key),
      };
    default:
      return state;
  }
};
