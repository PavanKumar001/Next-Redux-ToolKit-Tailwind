import { createSlice } from "@reduxjs/toolkit";
import { loginState } from './loginState';

export const initialState = {
    ... loginState,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        setLoggedIn:(state, action) => {
            state.loggedIn = true,
            state.loggedInUserId = action.payload.loggedInUserId,
            state.loggedInUserName = action.payload.loggedInUserName
        },
        setLogout: (state) =>{
            state.loggedIn = false,
            state.loggedInUserId = 0,
            state.loggedInUserName = null
        }
    },
})

export const loginActions = loginSlice.actions;
export default loginSlice;