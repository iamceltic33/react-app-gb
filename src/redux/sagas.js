import { put, takeLatest, delay } from 'redux-saga/effects'
import { addMessage } from './actions'

function* onAddMessageSaga(action) {
    console.log(action);
    yield put(addMessage(action.payload.chatId, action.payload.author, action.payload.text))
    if (action.payload.author !== "robot") {
        yield delay(1000)
        yield put(addMessage(action.payload.chatId, "robot", "Спасибо за ваше сообщение!"))
    }
}

function* mySaga() {
    yield takeLatest("addMessageWithSaga", onAddMessageSaga);
}

export default mySaga;