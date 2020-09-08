const chosenSectionsReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_CHOSEN":
            // append the new Section to the state
            state.push(action.payload);
            return state;
        case "REMOVE_CHOSEN":
            // Remove the section that is the same as the action.payload
            state.splice(state.findIndex( i => i === action.payload ));
            return state;
        default:
            return state;
    }
};

export default chosenSectionsReducer;