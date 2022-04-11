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

export const addMessageWithSaga = (chatId, author, text) => {
    return {
        type: "addMessageWithSaga",
        payload: {
            chatId,
            author,
            text
        }
    }
}