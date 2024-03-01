import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface AuthState {
    username: string;
    password: string;
    isLogged: boolean;
}

const initialState: AuthState = {
    username: "",
    password: "",
    isLogged: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoginStatus: (state, action: PayloadAction<boolean>) => {
            state.isLogged = action.payload;
        }
    }
});

export const {setLoginStatus} = authSlice.actions;

