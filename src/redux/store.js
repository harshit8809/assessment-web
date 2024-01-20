import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/StateSlice";
import apiReducer from "./slices/fetchApi"


export const store = configureStore({
    reducer:{
        form: formReducer,
        getApi: apiReducer
    }
})