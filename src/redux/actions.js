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