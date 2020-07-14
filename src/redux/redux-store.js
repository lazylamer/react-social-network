import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import conversationReducer from "./conversation-reducer";
import sideBarReducer from "./side-bar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    conversationPage: conversationReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers);

window.store = store;
export default store;