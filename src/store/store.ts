import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "./authSlice.ts";
import {loadingSlice} from "./loadingSlice.ts";
import {enableMapSet} from 'immer'

enableMapSet();

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        loading: loadingSlice.reducer,
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
