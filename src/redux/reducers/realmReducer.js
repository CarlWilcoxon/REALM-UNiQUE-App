const realmReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_REALM":
      return action.payload;
    default:
      return state;
  }
};

export default realmReducer;