const allSectionsReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_ALL_SECTIONS":
            return action.payload;
        case "ADD_SECTION_ALLSECTIONS":
            // append the new Section to the state
            return [...state, action.payload];
        case "REMOVE_SECTION_ALLSECTIONS":
            // Remove the section that is the same as the action.payload
            let newState = []
                for (let i = 0; i < state.length; i++) {
                if (state[i] !== action.payload) {
                newState.push(state[i])
                    }
                }
            return newState;
        default:
            return state;
    }
};

export default allSectionsReducer;
