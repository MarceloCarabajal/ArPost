import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    datos: null, //guardamos todo el form 
}

const envioSlice = createSlice({
    name: "envio",
    initialState,
    reducers: {
        guardarEnvio: (state, action) => {
            state.datos = action.payload; //guardamos los datos del form
        },
        limpiarEnvio: (state) => {
            state.datos = null; //limpiamos los datos del form
        },
    },
});

export const { guardarEnvio, limpiarEnvio } = envioSlice.actions;
export default envioSlice.reducer;