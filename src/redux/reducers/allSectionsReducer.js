const allSectionsReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_ALL_SECTIONS":
            return action.payload;
        default:
            return state;
    }
};

export default allSectionsReducer;
