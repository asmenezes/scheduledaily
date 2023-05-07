const { v4: uuidv4 } = require('uuid');
export const booleanReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOL":
      return [
        ...state,
        {
          boolName: action.bool.boolName,
          bID: uuidv4(),
          pID: 1,
          isComplete: false,
        },
      ];
    case "TOGGLE_BOOL":
      let index = state.findIndex((bool) => bool.bID === action.bool.bool.bID);

      state[index].isComplete = !action.bool.value;
      return [...state];
    case "REMOVE_BOOL":
      return state.filter((bool) => bool.bID !== action.bID);
    default:
      return state;
  }
};
// Add Complete_bool
