import { combineReducers, createStore } from "redux";
import profileReducer from "./reducer/profileReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import chatsReducer from "./reducer/chatsReducer"

const reducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer
})

export const store = createStore(reducer, composeWithDevTools());