const statistic = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STATISTICS':
      return action.payload;
    default:
      return state;
  }
};

export default statistic;
