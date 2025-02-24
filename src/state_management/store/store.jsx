import {combineReducers, configureStore} from "@reduxjs/toolkit";
import currentUserReducer from "../reducers/CurrentUserSlice.jsx";
import userProgressReducer from "../reducers/UserProgressSlice.jsx";

const rootReducer = combineReducers({
    userProgress: userProgressReducer,
    currentUser: currentUserReducer,
})
const store = configureStore({
    reducer: rootReducer
});

export default store;