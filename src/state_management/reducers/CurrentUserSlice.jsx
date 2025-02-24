import { createSlice } from '@reduxjs/toolkit';

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState:{
        username: '',
        password: '',
        isLoggedIn: false,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    },
    reducers: {
        login: (state, action) => {
            const { username, password, firstName, lastName } = action.payload;
            state.username = username;
            state.password = password;
            state.firstName = firstName;
            state.lastName = lastName;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.username = '';
            state.password = '';
            state.isLoggedIn = false;
            state.firstName = '';
            state.lastName = '';
            state.email = '';
            state.phoneNumber = '';
        },
        register: (state, action) => {
            const {firstName, lastName, email, phoneNumber, username, password} = action.payload;
            state.isLoggedIn = true;
            state.email = email;
            state.password = password;
            state.phoneNumber = phoneNumber;
            state.firstName = firstName;
            state.lastName = lastName;
            state.username = username;
        }
    },
});

export const { register, login, logout } = currentUserSlice.actions;
export default currentUserSlice.reducer;
