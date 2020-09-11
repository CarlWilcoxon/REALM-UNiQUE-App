const progress = (state = {}, action) => {
    switch (action.type) {
      case 'SET_PROGRESS':
        return action.payload;
      default:
        return state;
    }
  };

  // user will be on the redux state at:
  // state.progress
  export default progress;
