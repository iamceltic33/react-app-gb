const initialState = {
    username: 'Ruslan',
    authorized: false,
    signupStatus: "idle",
    error: "",
    profileData: null,
    loginStatus: "idle"
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "changeActive":
            return { ...state, active: !state.active };
        case "signup":
            return { ...state, signupStatus: "pending", error: "" };
        case "signupError":
            return { ...state, signupStatus: "error", error: action.payload };
        case "signupSuccess":
            return { ...state, signupStatus: "idle", profileData: action.payload };
        case "login":
            return { ...state, loginStatus: "pending", error: "" };
        case "loginError":
            return { ...state, loginStatus: "error", error: action.payload };
        case "loginSuccess":
            return { ...state, loginStatus: "idle", profileData: action.payload };
        case 'authorizationCheck':
            return { ...state, authorized: action.payload }
        default:
            return state;
    }
}

export default reducer;