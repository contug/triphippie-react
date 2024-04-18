import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "./authSlice.ts";
import {loadingSlice} from "./loadingSlice.ts";
import {enableMapSet} from 'immer'
import {apiSlice} from "../services/apiSlice.ts";
import {tripSlice} from "./tripSlice.ts";

enableMapSet();

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        trips: tripSlice.reducer,
        loading: loadingSlice.reducer,
        api: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
