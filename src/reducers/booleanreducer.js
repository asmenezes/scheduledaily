export const booleanReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOL":
      return [
        ...state,
        {
          boolName: action.bool.boolName,
          bID: Math.floor(Math.random() * 900000),
          pID: 1,
          isComplete: false,
        }
      ]

    case "REMOVE_BOOL":
      return state.filter((bool) => bool.bID !== action.bool.bID);
    default:
      return state;
  }
};
// Add Complete_bool
