const allRealmsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_REALMS":
      return action.payload;
    default:
      return state;
  }
};

export default allRealmsReducer;
