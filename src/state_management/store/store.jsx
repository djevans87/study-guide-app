import {combineReducers, configureStore} from "@reduxjs/toolkit";
import currentUserReducer from "../reducers/CurrentUserSlice.jsx";
import userProgressReducer from "../reducers/UserProgressSlice.jsx";
import quizReducer from "../reducers/QuizSlice.jsx";

const rootReducer = combineReducers({
    userProgress: userProgressReducer,
    currentUser: currentUserReducer,
    quiz: quizReducer,
});
const store = configureStore({
    reducer: rootReducer
});

export default store;