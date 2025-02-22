import {configureStore} from "@reduxjs/toolkit";
import currentUserSlice from "../reducers/currentUserSlice";

const store = configureStore({
    reducer: {
        currentUser: currentUserSlice,
    },
});

export default store;