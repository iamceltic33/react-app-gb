const initialState = {
    tags: [],
    status: "idle",
    image: "",
    statusImage: "idle"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "getTags":
            return {
                ...state,
                status: "pending"
            };
        case "getTagsSuccess":
            return {
                ...state,
                tags: action.payload,
                status: "success"
            };

        case "getTagsError":
            return {
                ...state,
                status: "error"
            }
        case "getImage":
            return {
                ...state,
                statusImage: "pending"
            };
        case "getImageSuccess":
            return {
                ...state,
                image: action.payload,
                statusImage: "success"
            };

        case "getImageError":
            return {
                ...state,
                statusImage: "error"
            }
        default: return state;
    }
}

export default reducer;