import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from "./reducer/profileReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import chatsReducer from "./reducer/chatsReducer"
import thunk from "redux-thunk";
// import createSagaMiddleware from "@redux-saga/core";
// import mySaga from "./sagas";

// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

import apiReducer from './reducer/apiReducer';
// const middleware = store => next => action => {
//     if (action.type === "addMessage") {
//         if (action.payload.author !== "robot") {
//             setTimeout(() => {
//                 store.dispatch({ type: "addMessage", payload: { chatId: action.payload.chatId, author: "robot", text: "Спасибо за ваше сообщение!" } })
//             }, 1000)
//         }
//     }
//     return next(action)
// }

// const sagaMidlleware = createSagaMiddleware();

// const persistConfig = {
//     key: 'root',
//     storage
// }

// const rootReducer = combineReducers({
//     profile: profileReducer,
//     chats: chatsReducer,
//     cats: apiReducer
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const reducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    cats: apiReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
// export const persistor = persistStore(store);

// sagaMidlleware.run(mySaga);