const allSectionsReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_ALL_SECTIONS":
            return action.payload;
        case "ADD_SECTION":
            // append the new Section to the state
            state.push(action.payload);
            return state;
        case "REMOVE_SECTION":
            // Remove the section that is the same as the action.payload
            state.splice(state.findIndex( i => i === action.payload ));
            return state;
        default:
            return state;
    }
};

export default allSectionsReducer;
