const answers = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_ANSWERS":
      // If this is a new question
      if ( state[action.payload.question_index] === undefined ) {
        // Add elements to the state array until there is one for the new question
        while (state.length < action.payload.question_index) {
          state.push('');
        }
      }
      // Replace whatever element is at that index with the new value
      state.splice(action.payload.question_index, 1, action.payload.question);
      return state;
    default:
      return state;
  }
};

export default answers;
