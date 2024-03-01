import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface LoadingState {
    loadingStatusMap: Map<string, boolean>;
    globalLoadingStatus: boolean;
}

export interface SetLoadingStatusPayload {
    callerId: string;
    status: boolean;
}

const initialState: LoadingState = {
    loadingStatusMap: new Map<string, boolean>(),
    globalLoadingStatus: false
}

/**
 * Slice for managing the loading status of the application
 */
export const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        /**
         * Set the loading status for a specific caller, and update the global loading status based on the loading status of all callers
         * @param state LoadingState - the current state
         * @param action PayloadAction<SetLoadingStatusPayload> - the callerId and the loading status to set for the caller
         */
        setLoadingStatus: (state, action: PayloadAction<SetLoadingStatusPayload>) => {
            action.payload.status ?
                state.loadingStatusMap.set(action.payload.callerId, action.payload.status) : state.loadingStatusMap.delete(action.payload.callerId);
            state.globalLoadingStatus = state.loadingStatusMap.size > 0;
        }
    }
});

export const {setLoadingStatus} = loadingSlice.actions;
