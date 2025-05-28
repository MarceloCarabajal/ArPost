import { configureStore } from "@reduxjs/toolkit";
import envioReducer from "../features/envio/envioSlice";

export const store = configureStore({
    reducer: {
        envio: envioReducer,
    },
});