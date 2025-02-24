import {createSlice} from "@reduxjs/toolkit";

const userProgressSlice = createSlice({
    name: 'userProgress',
    initialState:{
        java: 0,
        csharp: 0,
        javascript: 0,
        python: 0,
        sql: 0,
    },
    reducers: {
       updateProgress: (state, action) => {
            state[action.payload.language] = action.payload.progress;
        },
    }
});


export const {updateProgress} = userProgressSlice.actions;
export default userProgressSlice.reducer;
export const updateProgressAction = (language, progress) => {
    return {
        type: 'UPDATE_PROGRESS',
        language,
        progress,
    };
};