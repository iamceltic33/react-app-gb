import { auth } from "../service";

export const addMessage = (chatId, author, text) => {
    return {
        type: "addMessage",
        payload: {
            chatId,
            author,
            text
        }
    }
}

export const addMessageWithThunk = (chatId, author, text) => (dispatch, getState) => {
    dispatch(addMessage(chatId, author, text));
    if (author !== "robot") {
        setTimeout(() => {
            dispatch(addMessage(chatId, "robot", "Спасибо за ваше сообщение!"))
        }, 1000)
    }
}

// export const addMessageWithSaga = (chatId, author, text) => {
//     return {
//         type: "addMessageWithSaga",
//         payload: {
//             chatId,
//             author,
//             text
//         }
//     }
// }

// work with API
const API_URL = "https://cataas.com/api/tags";
const API_URL_IMAGE = "https://cataas.com/cat/";
export const getTagsSuccess = (data) => {
    return {
        type: "getTagsSuccess",
        status: "success",
        payload: data
    }
}

export const getTagsError = (error) => {
    return {
        type: "getTagsError",
        status: "error",
        payload: error
    }
}

export const getTags = () => {
    return {
        type: "getTags",
        status: "pending"
    }
}

export const getTagsThunk = () => async (dispatch) => {
    dispatch(getTags())
    try {
        const result = await fetch(API_URL);
        if (!result.ok) {
            const err = new Error(result.status);
            dispatch(getTagsError(err.message));
        }
        const data = await result.json();
        dispatch(getTagsSuccess(data));
    }
    catch (err) {
        dispatch(getTagsError(err.message));
    }
}

export const getImageSuccess = (data) => {
    return {
        type: "getImageSuccess",
        statusImage: "success",
        payload: data
    }
}

export const getImageError = (error) => {
    return {
        type: "getImageError",
        statusImage: "error",
        payload: error
    }
}

export const getImage = () => {
    return {
        type: "getImage",
        statusImage: "pending"
    }
}

export const getImageThunk = (tag) => async (dispatch) => {
    dispatch(getImage())
    try {
        const result = await fetch(API_URL_IMAGE + tag);
        if (!result.ok) {
            const err = new Error(result.status);
            dispatch(getImageError(err.message));
        }
        const data = await result.blob();
        console.log(data);
        dispatch(getImageSuccess(data));
    }
    catch (err) {
        dispatch(getImageError(err.message));
    }
}

export const authorizationCheck = (authorized) => {
    return {
        type: "authorizationCheck",
        payload: authorized
    }
}

export const signup = () => {
    return {
        type: "signup"
    }
}
export const signupSuccess = (data) => {
    return {
        type: "signupSuccess",
        payload: data
    }
}
export const signupError = (error) => {
    return {
        type: "signupError",
        payload: error
    }
}
export const signupThunk = (email, password) => (dispatch) => {
    dispatch(signup());
    auth.createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
            dispatch(signupSuccess(user));
        })
        .catch(error => {
            dispatch(signupError(error.message));
        })
}

export const login = () => {
    return {
        type: "login"
    }
}
export const loginSuccess = (data) => {
    return {
        type: "loginSuccess"
    }
}
export const loginError = (error) => {
    return {
        type: "loginError",
        payload: error
    }
}

export const loginThunk = (email, password) => (dispatch) => {
    dispatch(login());
    auth.signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
            dispatch(loginSuccess(user));
        })
        .catch(error => {
            dispatch(loginError(error.message));
        })
}

export const logout = () => {
    return {
        type: "logout"
    }
}
export const logoutThunk = () => (dispatch) => {
    auth.signOut()
        .then(() => {
            dispatch(logout())
        })
}