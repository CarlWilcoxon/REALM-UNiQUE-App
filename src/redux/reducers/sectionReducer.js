const section = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SECTION':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default section;
