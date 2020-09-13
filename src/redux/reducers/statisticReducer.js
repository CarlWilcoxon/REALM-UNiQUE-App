const statistic = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STATISTICS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.realm
export default statistic;
