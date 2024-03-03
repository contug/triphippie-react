import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../model/User.ts";


export interface AuthState {
    user: User;
    token: string | null
    isLogged: boolean;
}

const initialState: AuthState = {
    user: {
        email: "",
        name: "",
        lastName: "",
    },
    token: null,
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

