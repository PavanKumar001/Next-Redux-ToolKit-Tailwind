import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../pages/LoginScreen/loginSlice";

const store =  configureStore({
    reducer:{
        login: loginSlice.reducer,
    },
});

export default store;
