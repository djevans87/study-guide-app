import { createSlice } from '@reduxjs/toolkit';
import { MULTIPLE_CHOICE_QUESTIONS } from "../../components/common/Constants.jsx";

const initialState = {
    language: 'javascript',
    difficulty: 'easy',
    currentQuestion: 0,
    score: 0,
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        changeLanguage(state, action) {
            state.language = action.payload;
        },
        changeDifficulty(state, action) {
            state.difficulty = action.payload;
        },
        nextQuestion(state) {
            state.currentQuestion += 1;
        },
        previousQuestion(state) {
            state.currentQuestion -= 1;
        },
        incrementScore(state) {
            state.score += 1;
        },
    },
});

export const {
    changeLanguage,
    changeDifficulty,
    nextQuestion,
    previousQuestion,
    incrementScore,
} = quizSlice.actions;

export default quizSlice.reducer;
